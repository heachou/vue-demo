<template>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="user-o" >账号</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {
      active: 0,
    }
  },
  methods:{
    onChange(index) {
      this.active = index
    }
  }
}
</script>

<style>
</style>