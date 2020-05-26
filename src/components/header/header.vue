<template>
  <div class="header">
    <div class="left" @click="clickLeft">
      <van-icon name="arrow-left" class="icon-left" />
      <span class="text">{{fleetInfo.text && fleetInfo.text.replace("中国","")}}</span>
      <i class="el-icon-aim icon-text-after"></i>
    </div>
    <div class="right">
      <slot name="right">
        <i class="el-icon-office-building "></i>
        <van-icon name="home-o" class="icon-build"></van-icon>
        <span class="text">城镇小区</span>
      </slot>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'top-header',
  computed:{
    ...mapState(["fleetInfo"])
  },
  methods:{
    clickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.header {
  height: 48px;
  background: #2ac9f3;
  padding: 0 12px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    .text {
      margin-left: 4px;
      font-size: 12px;
    }
    .icon-build {
      font-size: 18px;
      color: #fff;
    }
  }
  .icon-text-after {
    font-size: 16px;
    margin-left: 2px;
    color: #fff;
  }
  .icon-left {
    font-size: 16px;
    margin-right: 4px;
    color: #fff;
  }
  .text {
    color: #fff;
    font-size: 14px;
  }
}
</style>