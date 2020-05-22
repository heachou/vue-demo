<template>
  <div class="item">
    <div class="item-top">
      <div class="item-top-l">
        <img src="./defaut.jpg" alt="" width="122">
      </div>
      <div class="item-top-r">
        <p class="title">红星路小区</p>
        <p class="address">四川省成都市金牛区下南路3号</p>
        <div class="box">
          <span class="color-red">进度:30%</span>
          <span class="color-blue">采集人口:30000</span>
        </div>
      </div>
    </div>
    <div class="item-bottom">
      <div class="flex1">
        <span class="color-yellow width120">楼栋:23</span>
        <span class="color-purple">房屋:23</span>
      </div>
      <span class="color-blue">已采房屋:230</span>
    </div>
  </div>
</template>


<style lang="less" scoped>
.color-red {
  color: #f50;
}
.color-yellow{
  color: #f7610a;
}
.color-blue {
  color: #33c8ee;
}
.color-purple {
  color: #cc62e2;
}
.width120 {
  width: 110px;
  display: inline-block;
}
.flex1 {
  flex: 1;
}
.item {
  background: #fff;
  margin-bottom: 12px;
  padding: 12px;
  &-top {
    display: flex;
    &-l {
      display: block;
      line-height: 0;
      font-size: 0;
      margin-right: 10px;
      width: 122px;
      height: 86px;
      overflow: hidden;
      img {
        display: block;
      }
    }
    &-r {
      flex: 1;
      max-width: calc(100% - 122px);
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      .title {
        padding-top: 6px;
        color: #333;
        font-size: 14px;
        margin-bottom: 14px;
      }
      .address {
        color: #888;
        font-size: 12px;
      }
      .box {
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
  &-bottom {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>