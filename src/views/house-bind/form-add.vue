<template>
  <div class="form-bg">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="所属区域"
        label="所属区域"
        placeholder="请选择所属区域"
        :rules="[{ required: true, message: '请选择所属区域' }]"
      />
      <van-field
        v-model="form.username"
        name="居住地址"
        label="居住地址"
        placeholder="请选择居住地址"
        :rules="[{ required: true, message: '请选择居住地址' }]"
      />
      <h2 class="block__title">人员信息</h2>
      <div class="grid-box">
        <van-grid :border="false" :column-num="3" :gutter="0">
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="border" />
            <div class="name">姓名</div>
            <div class="type">租住</div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" class="border" />
            <div class="name">姓名</div>
            <div class="type">租住</div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" class="border" />
            <div style="margin-top: 14px">
              <van-button plain type="primary" size="small" native-type="button" @click="new_add">新增</van-button>
            </div>
          </van-grid-item>
        </van-grid>
        <div style="padding: 0 12px;">
          <van-progress :percentage="50" stroke-width="10" />
        </div>
        <h2 class="block__title">房间信息</h2>
        <van-field
          v-model="form.username"
          name="房屋类型"
          label="房屋类型"
          placeholder="请选择房屋类型"
          :rules="[{ required: true, message: '请选择房屋类型' }]"
        />
        <van-field
          v-model="form.username"
          name="房屋姓名"
          label="房屋姓名"
          placeholder="请选择房屋姓名"
          :rules="[{ required: true, message: '请选择房屋姓名' }]"
        />
        <van-field
          v-model="form.username"
          name="房屋身份证"
          label="房屋身份证"
          placeholder="请选择房屋身份证"
          :rules="[{ required: true, message: '请选择房屋身份证' }]"
        />
        <van-field
          v-model="form.username"
          name="房屋联系方式"
          label="房屋联系方式"
          placeholder="请选择房屋联系方式"
          :rules="[{ required: true, message: '请选择房屋联系方式' }]"
        />
      </div>
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
</template>

<script>
export default {
  name: "form-add",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    new_add() {
      this.$emit("add")
    },
    onSubmit() {},
  }
};
</script>

<style scoped lang="less">
.form-bg{
  background: #fff;
  padding-bottom: 20px;
}
.grid-box {
  background: #fff;
  padding-bottom: 10px;
  .border {
    border: 1px solid #ebedf0;
  }
}
.name {
  font-size: 14px;
  color: #333333;
  margin-top: 15px;
}
.type {
  font-size: 14px;
  color: #999999;
  margin-top: 7px;
}
.block__title {
  margin: 0;
  padding: 20px 16px 4px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  background: #fff;
}
</style>