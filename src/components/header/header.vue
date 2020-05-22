<template>
  <div class="header">
    <div class="left">
      <i class="el-icon-arrow-left icon-left"></i>
      <span class="text">某某社区第二网格</span>
      <i class="el-icon-aim icon-text-after"></i>
    </div>
    <div class="right">
      <slot name="right">
        <i class="el-icon-office-building icon-build"></i>
        <span class="text">城镇小区</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<style scoped lang="less">
.header {
  height: 48px;
  background: #33c8ee;
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