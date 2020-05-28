<template>
  <div>
    <top-header rightText="实有添加"></top-header>
    <div class="main">
      <h2 class="block__title">个人信息</h2>
      <van-form @submit="onSubmit">
        <van-field name="file"
          :rules="[{ required: true, message: '请上传头像' }]"
          label="头像">
          <template #input>
            <van-uploader v-model="form.file" />
          </template>
        </van-field>
        <van-field v-model="form.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]" />
        <van-field v-model="form.idcard"
          name="IdNum"
          label="身份证"
          placeholder="请输入身份证"
          :rules="[{ required: true,pattern: regIdCar, message: '请输入正确格式的身份证' }]" />
        <van-field name="radio"
          :rules="[{ required: true,pattern: regIdCar, message: '请选择性别' }]"
          label="性别">
          <template #input>
            <van-radio-group v-model="form.sex"
              direction="horizontal">
              <van-radio name="0">男</van-radio>
              <van-radio name="1">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field readonly
          clickable
          name="nationalCode"
          :value="form.nationalCode"
          label="民族"
          placeholder="点击选择民族"
          @click="showPicker = true"
          :rules="[{ required: true, message: '请选择民族' }]" />
        <van-field v-model="form.phoneNum"
          name="phoneNum"
          label="联系方式"
          placeholder="请输入联系方式"
          :rules="[{ required: true, message: '请输入联系方式' }]" />

        <van-field v-model="form.username"
          name="房东姓名"
          label="房东姓名"
          placeholder="请输入房东姓名"
          :rules="[{ required: true, message: '请填写房东姓名' }]" />
        <van-field v-model="form.idcard"
          name="房东身份证"
          label="房东身份证"
          placeholder="请输入房东身份证"
          :rules="[{ required: true, message: '请输入房东身份证' }]" />

        <van-popup v-model="showPicker"
          position="bottom">
          <van-picker show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            value-key="label"
            @cancel="showPicker = false" />
        </van-popup>
        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button block
                type="info"
                native-type="submit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button block
                plain
                type="default"
                native-type=button>取消</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components";
import { sexMap, regIdCar, nations } from '@/constants/constants'

export default {
  name: "population-add",
  data() {
    return {
      regIdCar: regIdCar,
      showPicker: false,
      columns: nations,
      form: {
        username: "",
        idcard: "",
        mobile: "",
        value: ""
      }
    };
  },
  methods: {
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onSubmit() {
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