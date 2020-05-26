<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <h2 class="block__title">个人信息</h2>
      <van-form @submit="onSubmit">
        <van-field :readonly="!isEdit" name="uploader" label="图片上传" :rules="[{required: true,message:'请上传头像'}]">
          <template #input>
            <van-uploader :deletable="isEdit" :max-count="1" :multiple="false" capture="camera" v-model="form.uploader" />
          </template>
        </van-field>
        <van-field :readonly="!isEdit" v-model="form.name" name="name" label="姓名" placeholder="请输入姓名" :rules="[{ required: true, message: '请填写姓名' }]" />
        <van-field :readonly="!isEdit" :value="form.address" name="address" label="居住地址" placeholder="输入居住地址" :rules="[{ required: true, message: '请选择居住地址' }]" />
        <van-field :readonly="!isEdit" v-model="form.IdNum" name="IdNum" label="身份证" placeholder="请输入身份证" :rules="[{ required: true, message: '请输入身份证' }]" />
        <van-field :readonly="!isEdit" v-model="form.gridPhone" name="gridPhone" label="联系方式" placeholder="请输入联系方式" :rules="[{ required: true, message: '请输入联系方式' }]" />
        <van-field :readonly="!isEdit" clickable @click="showPicker = isEdit" name="ownerTypeText" v-model="form.ownerTypeText" label="住房类型" placeholder="请选择住房类型" :rules="[{ required: true, message: '请选择住房类型' }]" />
        <van-field :readonly="!isEdit" :disabled="!isEdit" name="domicile" v-model="form.domicile" label="户籍地址" placeholder="请输入户籍地址" :rules="[{ required: true, message: '请输入户籍地址' }]" />
        <van-field name="switch" label="是否搬走">
          <template #input>
            <van-switch v-model="form.state" size="20" active-value="2" inactive-value="0" />
            <span style="margin-left:2px">{{form.state == 2 ? "是":"否"}}</span>
          </template>
        </van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button block type="primary" native-type="button" v-show="!isEdit" @click="isEdit=true">编辑</van-button>
              <van-button block type="info" native-type="submit" v-show="isEdit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button block plain type="primary" native-type="button" @click="goBack">返回</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components";
import { mapState } from 'vuex';
import {updateCollectPopulationHis} from '@/api/index'

export default {
  name: "person-edit",
  data() {
    return {
      showPicker: false,
      form: {
        ...this.$route.query,
        uploader: [{ url: this.$route.query.url }]
      },
      isEdit: false
    };
  },
  computed: {
    ...mapState(['ownerTypeMap']),
    columns() {
      return Object.values(this.ownerTypeMap || {})
    },
  },
  created() {
    this.form.ownerTypeText = this.ownerTypeMap[this.form.ownerType]
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onConfirm(value, index) {
      this.form.ownerTypeText = value
      Object.entries(this.ownerTypeMap).forEach(a=>{
        if(a[1] === value){
          this.form.ownerType = a[0]
        }
      })
      this.showPicker = false
    },
    onSubmit(val) {
      const params = {
        ...this.form,
      }
      let formData = new FormData()
      const { uploader,url, ...rest } = this.form
      if (!uploader[0].url) { // 说明没有重新上传头像
        formData.append("file", this.form.uploader[0].file)
      }
      for(let key in rest){
        formData.append(key,rest[key])
      }
      updateCollectPopulationHis(formData).then(res=>{
        console.log(res)
        this.$toast('操作成功')
        this.$router.go(-1)
      },err=>{
        console.log(err)
      })
      console.log("submit", val);
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