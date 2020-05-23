<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <h2 class="block__title">房间信息</h2>
      <van-form @submit="onSubmit">
        <van-field
          readonly
          clickable
          name="picker"
          :value="form.value"
          label="房屋类型"
          placeholder="点击选择房屋类型"
          @click="showPicker = true"
          :rules="[{ required: true, message: '请选择房屋类型' }]"
        />
        <van-field
          v-model="form.username"
          name="房东姓名"
          label="房东姓名"
          placeholder="请输入房东姓名"
          :rules="[{ required: true, message: '请填写房东姓名' }]"
        />
        <van-field
          v-model="form.idcard"
          name="房东身份证"
          label="房东身份证"
          placeholder="请输入房东身份证"
          :rules="[{ required: true, message: '请输入房东身份证' }]"
        />
        <van-field
          v-model="form.mobile"
          name="房东联系方式"
          label="房东联系方式"
          placeholder="请输入房东联系方式"
          :rules="[{ required: true, message: '请输入房东联系方式' }]"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button  block type="info" native-type="submit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button  block plain type="default" native-type=button>取消</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components";

export default {
  name: "population-add",
  data() {
    return {
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
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