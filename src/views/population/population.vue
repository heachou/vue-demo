<template>
  <div>
    <top-header>
      <template #right>
        <span class="right">
          <van-icon name="friends" class="icon-build" />
          <span class="text">实有人口</span>
        </span>
      </template>
    </top-header>
    <div class="main">
      <search @search="onSearch"></search>
      <van-divider :style="{ color: '#1989fa', padding: '0',margin:'0' }"></van-divider>
      <Item v-for="n in 8"></Item>
      <add-icon @click="click"></add-icon>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { Header, Search, Tabbar,AddIcon } from "@/components"
import Item from './item'
export default {
  name: 'population',
  methods: {
    onSearch(val) {
      this.$toast(val)
    },
    click(){
      this.$router.push("/population-add")
    }
  },
  components: {
    topHeader: Header,
    Search,
    Tabbar,
    Item,
    AddIcon
  }
}
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 98px);
  overflow: auto;
  background: #e4e9ec;
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
</style>