<template>
  <div class="home">
    <top-header></top-header>
    <div class="main">
      <item v-for="n in 4" :key="n"></item>
      <div class="pagniation-box">
        <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" mode="simple"/>
      </div>
    </div>
    <div class="add-icon">
      <i class="el-icon-plus icon-plus"></i>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/header"
import Item from './item'
export default {
  name: 'Index',
  data() {
    return {
      currentPage: 1,
    }
  },
  components: {
    topHeader: Header,
    item: Item
  }
}
</script>
<style lang="less" scoped>
.home {
  position: relative;
}
.main {
  height: calc(100vh - 48px);
  overflow: auto;
  background: #e4e9ec;
}
.add-icon {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #33c8ee;
  background: #29db5c;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.pagniation-box{
  padding: 0 20px;
}
</style>