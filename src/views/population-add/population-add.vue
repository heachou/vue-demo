<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <h2 class="block__title">房间信息</h2>
      <van-form @submit="onSubmit">
        <van-field readonly clickable name="picker" :value="value" label="选择器" placeholder="点击选择类型" @click="showPicker = true" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components"

export default {
  name: 'population-add',
  data(){
    return {
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      value: "",
    }
  },
  methods:{
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onSubmit(){
      console.log('submit')
    }
  },
  components: {
    topHeader: Header,
  }
}
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