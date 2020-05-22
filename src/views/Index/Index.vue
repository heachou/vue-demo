<template>
  <div class="index">
    <top-header></top-header>
    <div class="main">
      <search @search="onSearch"></search>
      <van-grid :column-num="3">
        <van-grid-item to="/population">
          <slot name="icon">
            <van-icon name="friends-o" size="36" color="#4daa1d"></van-icon>
          </slot>
          <slot name="text">
            <span class="grid-txt color-1">实有人口</span>
          </slot>
        </van-grid-item>
        <van-grid-item to="/city">
          <slot name="icon">
            <van-icon name="home-o" size="36" color="#37c9f1"></van-icon>
          </slot>
          <slot name="text">
            <span class="grid-txt color-2">城镇小区</span>
          </slot>
        </van-grid-item>
        <van-grid-item to="/town">
          <slot name="icon">
            <van-icon name="hotel-o" size="36" color="#2181f7"></van-icon>
          </slot>
          <slot name="text">
            <span class="grid-txt color-3">农村房屋</span>
          </slot>
        </van-grid-item>
      </van-grid>
      <van-cell-group>
        <van-cell title="通知公告" label="操作手册请认真查看" value="20:58"></van-cell>
        <van-cell title="系统消息" label="30个小区未绑定" value="20:58"></van-cell>
      </van-cell-group>
      <div class="grid-box" style="margin-top:4px">
        <van-cell title="基础数据" label="截止2020-05-08 22:12:59" >
          <slot><van-button type="primary" size="small">查看全部</van-button></slot>
        </van-cell>
      </div>
      <van-grid :border="false">
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l1">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l1">小区数量</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l2">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l2">自住房建</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l3">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l3">房间数量</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l4">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l4">实有人口</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l5">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l5">流动人口</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l6">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l6">出租房建</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l7">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l7">户籍人口</span></slot>
        </van-grid-item>
        <van-grid-item>
          <slot name="icon">
            <span class="num color-l8">1212</span>
          </slot>
          <slot name="text"><span class="grid-txt color-l8">空置房建</span></slot>
        </van-grid-item>
      </van-grid>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { Header, Search,Tabbar } from "@/components"
export default {
  name: 'index',
  methods: {
    onSearch(val) {
      this.$toast(val)
    }
  },
  components: {
    topHeader: Header,
    Search,
    Tabbar
  }
}
</script>

<style lang="less" scoped>
.grid-header{
  padding: 16px 14px;
  position: relative;
  background: #fff;
  .look-all{
    position:absolute;
    right: 0;
    top: -4px;
    width: 90px;
    height: 24px;
    color: #fff;
    background: #2ac9f3;
    display: inline-block;
  }
}
.index{
  background: #e7ebee;
}
.grid-txt {
  color: #646566;
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  margin-top: 8px;
}
.num {
  font-size: 14px;
}
.grid-txt2 {
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  margin-top: 8px;
}
.main /deep/ .van-panel__header-value {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}
.color-1 {
  color: #4daa1d;
}
.color-2 {
  color: #37c9f1;
}
.color-3 {
  color: #2181f7;
}
.color-l1 {
  color: #52bff6;
}
.color-l2 {
  color: #c07bcf;
}
.color-l3 {
  color: #f8a652;
}
.color-l4 {
  color: #9daffc;
}
.color-l5 {
  color: #fb8b8f;
}
.color-l6 {
  color: #fdbd2f;
}
.color-l7 {
  color: #2ac9f3;
}
.color-l8 {
  color: #4daa1d;
}
</style>