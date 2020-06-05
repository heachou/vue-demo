<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <van-tabs v-model="active" color="#2ac9f3">
        <van-tab title="小区绑定">
          <div>
            <form-add @submit="submit"></form-add>
          </div>
        </van-tab>
        <van-tab title="小区详情">
          <community-detail></community-detail>
        </van-tab>
        <van-tab title="楼栋信息">
          <build-detail></build-detail>
        </van-tab>
        <van-tab title="实有人口">
          <community-person></community-person>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components"
import FormAdd from './form-add'
import CommunityDetail from './community-detail'
import BuildDetail from './build-detail'
import CommunityPerson from './community-person'
import { updateCollectCommunity } from '@/api/index'

export default {
  name: "city-bind",
  data(){
    return {
      active: this.$route.query.tab || 0
    }
  },
  methods:{
    submit(params){
      updateCollectCommunity(params).then(res=>{
        console.log(res)
      },err=>{
        console.log(err)
      })
    }
  },
  components: {
    topHeader: Header,
    FormAdd,
    CommunityDetail,
    BuildDetail,
    CommunityPerson
  }
};
</script>

<style>
</style>