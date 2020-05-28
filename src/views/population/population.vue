<template>
  <div>
    <top-header rightText="实有人口" rightIcon="friends-o"></top-header>
    <div class="main">
      <search @search="onSearch"></search>
      <van-divider :style="{ color: '#1989fa', padding: '0',margin:'0' }"></van-divider>
      <van-list v-model="loading" finished-text="没有更多了" :finished="finished" @load="load">
        <Item v-for="item in list" :key="item.id" :item="item"></Item>
      </van-list>
      <!-- <add-icon @click="click"></add-icon> -->
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { Header, Search, Tabbar,AddIcon } from "@/components"
import Item from './item'
import {getCollectPopulationList} from '@/api/index'
import {mapState} from 'vuex'
export default {
  name: 'population',
  computed:{
    ...mapState(["user"])
  },
  data(){
    return{
      list: [],
      form:{
        pageSize: 10,
        pageNum:1
      },
      loading: false,
      finished: false,
      name: ''
    }
  },
  methods: {
    onSearch(val) {
      this.loading = false
      this.list = []
      this.finished = false
      this.name = val
      this.load()
    },
    load(){
      const params = {
        fleetId: 158893 || this.user.FLEET_ID,
        ...this.form,
        name: this.name
      }
      this.loading = true
      getCollectPopulationList(params).then(res=>{
        let obj = res.obj
        if(obj.list.length < this.form.pageSize){
          this.finished = true
        }
        this.list = [...this.list,...obj.list]
        this.form.pageNum += 1
        this.loading = false
      },err=>{
        this.loading = false
        console.log(err)
      })
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