<template>
  <div class="home">
    <top-header></top-header>
    <div class="main">
      <search @search="onSearch"></search>
      <van-divider :style="{ color: '#1989fa', padding: '0',margin:'0' }"></van-divider>
      <van-loading v-if="loading"/>

      <item v-for="item in list" :key="item.id" :item="item" @clickBind="clickBind" @clickEdit="clickEdit"></item>
      <div class="pagniation-box">
        <van-pagination v-model="form.pageNum" :total-items="total" :items-per-page="form.pageSize" mode="simple" @change="changePagination"/>
      </div>
      <add-icon @click="click"></add-icon>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { Header, Search, Tabbar, AddIcon } from "@/components"
import Item from "./item"
import { getCommunityList } from "@/api/index"
import { mapState } from "vuex"
export default {
  name: "index",
  data() {
    return {
      form: {
        pageNum: 1,
        pageSize: 10,
        pageNum: 1,
        communityName: ""
      },
      total: 0,
      list: []
    }
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    this.getCommunityList();
  },
  methods: {
    changePagination(index){
      this.getCommunityList()
    },
    getCommunityList() {
      const params = {
        fleetId: this.user.FLEET_ID,
        ...this.form
      }
      this.loading = true
      this.list = []
      getCommunityList(params).then(res=>{
        this.loading = false
        this.list = res.obj ? res.obj.list || [] : []
        this.total = res.obj ? res.obj.total : 0
      },err=>{
        console.log(err)
      })
    },
    onSearch(val) {
      this.form.communityName = val
      this.form.pageNum = 1
      this.getCommunityList()
    },
    clickBind(item) {
      this.$router.push(`/city-bind/${item.id}`);
    },
    clickEdit(item) {
      this.$router.push(`/city-edit/${item.id}`);
    },
    click() {
      this.$router.push("/community-add");
    }
  },
  components: {
    topHeader: Header,
    Search,
    Tabbar,
    Item,
    AddIcon
  }
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
}
.main {
  height: calc(100vh - 98px);
  overflow: auto;
  background: #e4e9ec;
}
.pagniation-box {
  padding: 0 20px;
}
</style>