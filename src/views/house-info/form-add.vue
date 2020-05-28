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
        name="小区名称"
        label="小区名称"
        placeholder="请选择小区名称"
        :rules="[{ required: true, message: '请选择小区名称' }]"
      />
      <van-field
        v-model="form.username"
        name="房屋信息"
        label="房屋信息"
        placeholder="请选择房屋信息"
        :rules="[{ required: true, message: '请选择小区名称' }]"
      />
      <h2 class="block__title">人员信息</h2>
      <div class="grid-box">
        <van-grid :border="false" :column-num="3" :gutter="0">
          <van-grid-item v-for="item in list" :key="item.id">
            <van-image
              :src="item.url"
              class="border"
              width="100%"
              height="90"
              @click="imageClick(item)"
            />
            <div class="name">{{item.name}}</div>
            <div class="type">{{ownerTypeMap[item.ownerType]}}</div>
          </van-grid-item>
          <van-grid-item>
            <van-image 
              width="100%"
              height="90" loading-icon="photo-o" class="border" @click="new_add" />
            <div style="margin-top: 14px">
              <van-button plain type="primary" size="small" native-type="button" @click="new_add">新增</van-button>
            </div>
          </van-grid-item>
        </van-grid>
        <h2 class="block__title">房间信息</h2>
        <van-field
          v-model="houseStatusMap[form.state]"
          :readonly="!!houseStatusMap[form.state]"
          disabled
          name="房屋类型"
          label="房屋类型"
          placeholder="请选择房屋类型"
          :rules="[{ required: true, message: '请选择房屋类型' }]"
        />
        <van-field
          v-model="form.ownerName"
          :readonly="!!form.ownerName"
          disabled
          name="房东姓名"
          label="房东姓名"
          placeholder="请选择房东姓名"
          :rules="[{ required: true, message: '请选择房东姓名' }]"
        />
        <van-field
          v-model="form.ownerIdNum"
          :readonly="!!form.ownerIdNum"
          disabled
          name="房东身份证"
          label="房东身份证"
          placeholder="请选择房东身份证"
          :rules="[{ required: true, message: '请选择房东身份证' }]"
        />
        <van-field
          v-model="form.ownerPhone"
          :readonly="!!form.ownerPhone"
          disabled
          name="房屋联系方式"
          label="房屋联系方式"
          placeholder="请选择房屋联系方式"
          :rules="[{ required: true, message: '请选择房屋联系方式' }]"
        />
      </div>
    </van-form>
  </div>
</template>

<script>
import { houseStatusMap,ownerTypeMap } from "@/constants/constants";
import { selectHisByHouseId } from "@/api/index";

export default {
  name: "form-add",
  data() {
    return {
      form: {
        ...this.$route.query
      },
      houseStatusMap: houseStatusMap,
      ownerTypeMap:ownerTypeMap,
      list: []
    };
  },
  created(){
    this.selectHisByHouseId()
  },
  methods: {
    selectHisByHouseId(){
      const params = {
        houseId: this.$route.params.id
      }
      selectHisByHouseId(params).then(res=>{
        let obj = res.obj
        this.list = obj.list
      },err=>{
        console.log(err)
      })
    },
    imageClick(img) {
      this.$router.push({
        path: `/person-edit/1`,
        query: this.$route.query
      });
    },
    new_add() {
      this.$emit("add");
    },
    onSubmit() {}
  }
};
</script>

<style scoped lang="less">
.form-bg {
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