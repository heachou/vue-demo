<template>
  <div class="item">
    <div class="left">
      <div class="title">{{item.name}}</div>
      <div class="id-card">
        <span class="left_text">身份证:</span>
        <span class="left_num">{{item.idNum}}</span>
      </div>
      <div class="phone">
        <span class="left_text">电话:</span>
        <span class="left_num">{{item.phoneNum}}</span>
      </div>
    </div>
    <div class="right">
      <van-button size="small" type="primary" plain @click="edit(item)">修改</van-button>
      <div class="status primary">自住</div>
    </div>
  </div>
</template>

<script>
import {} from '@/constants/constants'
export default {
  name:'item',
  props: ['item'],
  data(){
    return {

    }
  },
  methods:{
    edit(item){
      this.$router.push({
        path:  `/population-edit/${item.id}`,
        query: item
      })
    }
  }
}
</script>


<style lang="less" scoped>
.item {
  margin-bottom: 12px;
  padding: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .status {
    text-align: right;
    margin-top: 12px;
    font-size: 14px;
  }
  .primary {
    color: #07c160;
  }
  .danger {
    color: #ee0a24;
  }
  .left {
    .title {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
    .id-card {
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 14px;
    }
    .left_text {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      color: #666666;
    }
    .left_num {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>