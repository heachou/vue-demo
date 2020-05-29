<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <h2 class="block__title">个人信息</h2>
      <van-form @submit="onSubmit">
        <van-field :readonly="!isEdit"
          name="uploader"
          label="图片上传"
          :rules="[{required: true,message:'请上传头像'}]">
          <template #input>
            <van-uploader :deletable="isEdit"
              :max-count="1"
              :multiple="false"
              capture="camera"
              v-model="form.uploader" />
          </template>
        </van-field>
        <van-field :readonly="!isEdit"
          v-model="form.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]" />
        <van-field name="sex"
          :rules="[{ required: true, message: '请选择性别' }]"
          label="性别">
          <template #input>
            <van-radio-group v-model="form.sex"
              direction="horizontal">
              <van-radio name="0">男</van-radio>
              <van-radio name="1">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field :readonly="!isEdit"
          :value="form.address"
          name="address"
          label="居住地址"
          placeholder="输入居住地址"
          :rules="[{ required: true, message: '请选择居住地址' }]" />
        <van-field :readonly="!isEdit"
          v-model="form.IdNum"
          name="IdNum"
          label="身份证"
          placeholder="请输入身份证"
          :rules="[{ required: true, message: '请输入身份证' }]" />
        <van-field :readonly="!isEdit"
          v-model="form.phoneNum"
          name="phoneNum"
          label="联系方式"
          placeholder="请输入联系方式" />
        <van-field :readonly="!isEdit"
          clickable
          @click="showPicker = isEdit"
          name="ownerTypeText"
          v-model="form.ownerTypeText"
          label="住房类型"
          placeholder="请选择住房类型"
          :rules="[{ required: true, message: '请选择住房类型' }]" />
        <van-field :readonly="!isEdit"
          name="domicile"
          v-model="form.domicile"
          label="户籍地址"
          placeholder="请输入户籍地址" />
        <van-field readonly
          clickable
          name="nationalCode"
          :value="form.nationalText"
          label="民族"
          placeholder="点击选择民族"
          @click="showNationPicker = true" />
        <van-field :readonly="!isEdit"
          name="state"
          label="是否搬走">
          <template #input>
            <van-switch :disabled="!isEdit"
              v-model="form.state"
              size="20"
              active-value="2"
              inactive-value="0" />
            <span style="margin-left:2px">{{form.state == 2 ? "是":"否"}}</span>
          </template>
        </van-field>
        <van-popup v-model="showPicker"
          position="bottom">
          <van-picker show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false" />
        </van-popup>
        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button block
                type="primary"
                native-type="button"
                v-show="!isEdit"
                @click="isEdit=true">编辑</van-button>
              <van-button block
                type="info"
                native-type="submit"
                v-show="isEdit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button block
                plain
                type="primary"
                native-type="button"
                @click="goBack">返回</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
    <van-popup v-model="showNationPicker"
      position="bottom">
      <van-picker show-toolbar
        :columns="nations"
        @confirm="onNationConfirm"
        value-key="label"
        @cancel="showNationPicker = false" />
    </van-popup>
  </div>
</template>

<script>
import { Header } from "@/components";
import { mapState } from 'vuex';
import { updateCollectPopulationHis } from '@/api/index'
import { sexMap, regIdCar, nations } from "@/constants/constants";

export default {
  name: "person-edit",
  data() {
    return {
      showPicker: false,
      showNationPicker: false,
      nations: nations,
      form: {
        ...this.$route.query,
        uploader: [{ url: this.$route.query.url }]
      },
      isEdit: true
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
      Object.entries(this.ownerTypeMap).forEach(a => {
        if (a[1] === value) {
          this.form.ownerType = a[0]
        }
      })
      this.showPicker = false
    },
    onNationConfirm(obj){
      this.form.nationalText = obj.label
      this.form.nationalCode = obj.value
      this.showNationPicker = false
    },
    onSubmit(val) {
      let formData = new FormData()
      const { uploader, url, ...rest } = this.form
      if (uploader[0].file) { // 说明没有重新上传头像
        formData.append("file", this.form.uploader[0].file)
      }
      formData.append("name", this.form.name)
      formData.append("IdNum", this.form.IdNum)
      formData.append("phoneNum", this.form.phoneNum)
      formData.append("sex", this.form.sex)
      formData.append("nationalCode", this.form.nationalCode)
      formData.append("ownerType", this.form.ownerType)
      formData.append("address", this.form.address)
      formData.append("addressId", this.form.addressId)
      formData.append("houseId", this.form.houseId)
      formData.append("domicile", this.form.domicile)
      formData.append("state", this.form.state)
      updateCollectPopulationHis(formData).then(res => {
        this.$toast('操作成功')
        this.$router.go(-1)
      }, err => {
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