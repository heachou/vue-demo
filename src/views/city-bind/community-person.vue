<template>
  <div>
    <search @search="search"></search>
    <van-divider style="margin:0"></van-divider>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多..." @load="onload">
      <div v-for="item in list" :key="item.id">
        <van-cell @click="clickPerson(item)"> 
          <van-row gutter="12">
          <van-col span="6">
            <van-image fit="contain" width="100%" height="70" :src="item.url" />
          </van-col>
          <van-col span="18">
            <div class="item">
              <span class="label">姓名:</span>
              <span class="val">{{item.name}}</span>
            </div>
            <div class="item">
              <span class="label">住址:</span>
              <span class="val">{{item.address}}</span>
            </div>
            <div class="item">
              <span class="label">住房类型:</span>
              <span class="val">{{ownerTypeMap[item.ownerType]}}</span>
            </div>
            <div class="item">
              <span class="label">电话号码:</span>
              <span class="val">{{item.gridPhone}}</span>
            </div>
          </van-col>
        </van-row>
        </van-cell>
      </div>
    </van-list>
  </div>
</template>

<script>
import Search from '@/components/search/search'
import {queryCommunityPopulation} from '@/api/index'
import {mapState} from 'vuex'
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
  computed:{
    ...mapState(['ownerTypeMap'])
  },
  methods:{
    clickPerson(person){
      this.$router.push({
        path: `/person-edit/${person.id}`,
        query: person
      })
    },
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
        this.list = res.obj
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

<style lang="less" scoped>
.item{
  display: flex;
  align-items: center;
  .label{
    width: 80px;
    margin-right: 20px;
  }
}
</style>