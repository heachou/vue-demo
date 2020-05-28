<template>
  <div>
    <top-header rightText="实有添加" rightIcon="friends-o"></top-header>
    <div class="main">
      <h2 class="block__title">个人信息</h2>
      <van-form @submit="onSubmit">
        <van-field name="file" :rules="[{ required: true, message: '请上传头像' }]" label="头像">
          <template #input>
            <van-uploader :multiple="false" v-model="form.file" :max-count="1"/>
          </template>
        </van-field>
        <van-field
          v-model="form.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="form.IdNum"
          name="IdNum"
          label="身份证"
          placeholder="请输入身份证"
          :rules="[{ required: true,pattern: regIdCar, message: '请输入正确格式的身份证' }]"
        />
        <van-field
          name="radio"
          :rules="[{ required: true, message: '请选择性别' }]"
          label="性别"
        >
          <template #input>
            <van-radio-group v-model="form.sex" direction="horizontal">
              <van-radio name="0">男</van-radio>
              <van-radio name="1">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="form.phoneNum"
          name="phoneNum"
          label="联系方式"
          placeholder="请输入联系方式"
          :rules="[{ required: true, message: '请输入联系方式' }]"
        />

        <van-field
          readonly
          clickable
          name="nationalCode"
          :value="form.nationalText"
          label="民族"
          placeholder="点击选择民族"
          @click="showPicker = true"
          :rules="[{ required: true, message: '请选择民族' }]"
        />
        <van-field
          v-model="form.address"
          name="address"
          label="居住地址"
          placeholder="请选择居住地址"
          :rules="[{ required: true, message: '选择居住地址' }]"
        />
        <van-field
          v-model="form.communityName"
          name="communityName"
          label="小区名称"
          placeholder="请输入小区名称"
          :rules="[{ required: true, message: '请输入小区名称' }]"
        />
        <van-field
          v-model="form.unit"
          name="unit"
          label="小区单元"
          placeholder="请输入小区单元"
          :rules="[{ required: true, message: '请输入小区单元' }]"
        />
        <van-field
          v-model="form.domicile"
          name="domicile"
          label="户籍地址"
          placeholder="请输入户籍地址"
          :rules="[{ required: true, message: '请输入户籍地址' }]"
        />

        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button block type="info" native-type="submit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button block plain type="default" native-type="button">取消</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        value-key="label"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Header } from "@/components";
import { sexMap, regIdCar, nations } from "@/constants/constants";
import {mapState} from 'vuex'
import {insertPopulationHis} from '@/api/index'

export default {
  name: "population-add",
  data() {
    return {
      regIdCar: regIdCar,
      showPicker: false,
      columns: nations,
      form: {
        houseId:0
      }
    };
  },
  computed:{
    ...mapState(["user"])
  },
  methods: {
    onConfirm(obj, index) {
      this.form.nationalText = obj.label
      this.form.nationalCode = obj.value
      this.showPicker = false
    },
    onSubmit(values) {
      const {file,...rest} = this.form
      let formData = new FormData()
      for(let key in rest){
        formData.append(key,rest[key])
      }
      formData.append('file',file[0].file)
      formData.append('fleetId',this.user.FLEET_ID)
      insertPopulationHis(formData).then(res=>{
        console.log(res)
      },err=>{
        this.$toast.fail("提交失败")
        console.log(err)
      })
      console.log("submit");
    }
  },
  components: {
    topHeader: Header
  }
};
</script>

<style scoped lang="less">
.block__title {
  margin: 0;
  padding: 20px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>