<template>
  <div class="item">
    <div class="item-top">
      <div class="item-top-l">
        <img :src="item.photoUrl" alt="image" width="122" />
      </div>
      <div class="item-top-r">
        <div class="box-top">
          <div class="box-top-flex">
            <p class="title">{{item.communityName}}</p>
            <van-button v-if="item.bind === 1" plain type="primary" size="small" @click="clickEdit">修改</van-button>
            <van-button v-if="item.bind === 0" plain type="info" size="small" @click="clickBind">绑定</van-button>
          </div>
          <p class="address">{{item.address}}</p>
        </div>
        <div class="box">
          <!-- <span class="color-red">进度:30%</span> -->
          <span class="color-blue">采集人口:{{item.popilationNum}}</span>
        </div>
      </div>
    </div>
    <div class="item-bottom">
      <div class="flex1">
        <span class="color-yellow width120">楼栋:{{item.buildings}}</span>
        <span class="color-purple">房屋:</span>
      </div>
      <span class="color-blue">已采房屋:{{item.tenantHouseNum + item.ownerHouseNum + item.freeHouseNum}}</span>
    </div>
  </div>
</template>
<script>
// 1.普通住宅2.别墅3.拆迁安置房4.廉租房限价商品房5.商住楼（公寓）9.  其他
export default {
  name: "item",
  props:['item'],
  data(){
    return {
      typeMap:{
        1: "普通住宅",
        2: "别墅",
        3: "拆迁安置房",
        4: "廉租房限价商品房",
        5: "商住楼（公寓）9",
        9: "其他"
      }
    }
  },
  methods: {
    clickBind(val) {
      this.$emit('clickBind',item)
    },
    clickEdit(){
      this.$emit('clickEdit',item)
    }
  },
};
</script>

<style lang="less" scoped>
.color-red {
  color: #fb8b8f;
}
.color-yellow {
  color: #f8a652;
}
.color-blue {
  color: #52bff6;
}
.color-purple {
  color: #c07bcf;
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
      }
      .address {
        color: #888;
        font-size: 12px;
      }
      .box-top{
        // display: flex;
        // align-items: center;
        &-flex{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
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
    font-size: 12px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>