<template>
  <div>
    <top-header rightText="农村房屋" rightIcon="hotel-o"></top-header>
    <search @search="search"></search>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="left">
          <div class="title">{{item.ownerName}}</div>
          <div class="id-card">
            <span class="left_text">地址:</span>
            <span class="left_num">{{item.address}}</span>
          </div>
          <div class="phone">
            <span class="left_text">电话:</span>
            <span class="left_num">{{item.gridPhone}}</span>
          </div>
          <div class="phone">
            <span class="left_text">居住人数:</span>
            <span class="left_num">{{item.registerPopNum}}</span>
          </div>
        </div>
        <div class="right">
          <van-button size="small" type="primary" plain @click="edit(item)">修改</van-button>
          <div class="status primary">{{ownerTypeMap[item.state]}}</div>
        </div>
      </div>
    </van-list>
    <add-icon @click="townBind"></add-icon>
  </div>
</template>

<script>
import { Header, Search,AddIcon } from '@/components'
import { getCollectHouseList } from '@/api/index'
import { mapState } from 'vuex'

export default {
  name: 'town',
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      form: {
        pageSize: 10,
        pageNum: 1,
        type: 0,

      }
    }
  },
  computed: {
    ...mapState(["user","ownerTypeMap"])
  },
  methods: {
    townBind(){
      this.$router.push({
        path: '/town-bind'
      })
    },
    search(val) {
      this.form.pageNum = 1
      this.loading = false
      this.finished = false
      this.list = []
      this.load()
    },
    load() {
      const params = {
        ...this.form,
        fleetId: 67 || this.user.FLEET_ID
      }
      this.loading = true
      getCollectHouseList(params).then(res => {
        let obj = res.obj
        this.list = [...this.list,...obj.list]
        if (obj.list.length < this.form.pageSize) {
          this.finished = true
        }
        this.form.pageNum += 1
        this.loading = false
      }, err => {
        this.loading = false
        console.log(err)
      })
    },
    edit(item){
      this.$router.push({
        path: `/house-info/${item.id}`,
        query: item
      })
    }
  },
  components: {
    TopHeader: Header,
    Search,
    AddIcon
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
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
    .phone{
      line-height: 1;
    }
    .id-card {
      margin-top: 4px;
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