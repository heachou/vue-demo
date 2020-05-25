<template>
  <div>
    <search @search="search"></search>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多..." @load="onload">
      <div v-for="item in list" :key="item.id">{{item.name}}</div>
    </van-list>
  </div>
</template>

<script>
import Search from '@/components/search/search'
import {queryCommunityPopulation} from '@/api/index'
export default {
  name: 'community-person',
  data(){
    return {
      text: '',
      loading: false,
      list: [],
      finished: false,
      form:{
        pageNum: 1,
        pageSize: 10
      },
      communityId: this.$route.params.id,
    }
  },
  methods:{
    search(val){
      this.finished = false
      this.list = []
      this.loading = false
      this.form.pageNum = 1
      this.text = val
    },
    onload(){
      const params = {
        name: this.text,
        communityId: this.communityId,
        ...this.form
      }
      this.loading = true
      queryCommunityPopulation(params).then(res=>{
        this.list = res.obg
        this.form.pageNum += 1
        if(res.obj.length < this.form.pageSize){
          this.finished = true
        }
        this.loading = false
      },err=>{
        this.loading = false
        console.log(err)
      })
    }
  },
  components:{
    Search
  }
}
</script>

<style>

</style>