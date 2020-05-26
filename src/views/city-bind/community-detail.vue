<template>
  <div>
    <van-field v-model="name" label="所属区域" placeholder="请选择所属区域" :rules="[{ required: true, message: '请选择所属区域' }]" />
    <van-field v-model="communityName" name="communityName" label="小区名称" placeholder="请选择小区名称" :rules="[{ required: true, message: '请选输入小区名称' }]" />
    <h2 class="title-block">房间信息</h2>
    <van-tabs v-model="active">
      <van-tab title="视图">
        <div class="legend">
          <van-row>
            <van-col span="6" class="item">
              <span class="block" style="background:#37c9f1"></span>
              <span>自住</span>
            </van-col>
            <van-col span="6" class="item">
              <span class="block" style="background:#f2a587"></span>
              <span>出租</span>
            </van-col>
            <van-col span="6" class="item">
              <span class="block" style="background:#e6e6e6"></span>
              <span>空置</span>
            </van-col>
            <van-col span="6" class="item">
              <span class="block" style="background:#fb8b8f"></span>
              <span>异常</span>
            </van-col>
          </van-row>
          <van-divider></van-divider>
          <van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="load2">
            <van-cell :title="`${item.address}${item.unit}单元${item.building}栋 F${item.floor}`" v-for="item in list2" :key="item.id">
              <template #label>
                <van-row>
                  <van-col span="6" @click="clickItem(item)">
                    <span class="room-info" :style="`background:${stateMap[item.state] || '#e6e6e6'}`">{{item.floor}}{{item.room}}</span>
                  </van-col>
                </van-row>
              </template>
            </van-cell>
          </van-list>
        </div>
      </van-tab>
      <van-tab title="列表">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
          <van-cell :title="`${item.address}${item.unit}单元 F${item.floor}`" desc="描述信息" v-for="item in list" :key="item.id" @click="clickItem(item)">
            <template #label>
              <div class="room-label">
                <van-row>
                  <van-col span="4">{{item.floor}}{{item.room}}</van-col>
                  <van-col span="6">居住: {{item.registerPopNum}}人</van-col>
                  <van-col span="10">房主: {{item.ownerPhone}}</van-col>
                  <van-col span="4" :style="`color:${stateMap[item.state] || '#e6e6e6'}`">{{status[item.state]}}</van-col>
                </van-row>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { selectHouseByCommunity } from '@/api/index'

const stateMap = {
  '0': '#37c9f1',
  '1': '#f2a587',
  '2': '#e6e6e6',
  "4": "#e6e6e6"
}

const status = ["自住", "出租", "空置", "异常"]


export default {
  name: 'community-detail',
  data() {
    return {
      stateMap: stateMap,
      status: status,
      loading: false,
      finished: false,
      active: 0,
      communityName: '成都市青羊区红星镇丽莎村3组234号',
      name: "成都市青羊区大石桥街道红路社区2网格",
      list: [],

      list2: [],
      loading2: false,
      finished2: false,
      form2: {
        pageSize: 10,
        pageNum: 1
      },

      communityId: this.$route.params.id,
      form: {
        pageSize: 10,
        pageNum: 1
      },
    }
  },
  created() {
  },
  methods: {
    clickItem(item) {
      
      console.log(item)
    },
    load2() {
      const params = {
        communityId: this.communityId,
        ...this.form2
      }
      this.loading2 = true
      selectHouseByCommunity(params).then(res => {
        let obj = res.obj
        this.loading2 = false
        this.list2 = obj.list
        this.form2.pageNum += 1
        if (obj.list.length < this.form2.pageSize) {
          this.finished2 = true
        }
      }, err => {
        this.loading2 = false
        console.log(err)
      })
    },
    load() {
      const params = {
        communityId: this.communityId,
        ...this.form
      }
      this.loading = true
      selectHouseByCommunity(params).then(res => {
        let obj = res.obj
        this.loading = false
        this.list = obj.list
        this.form.pageNum += 1
        if (obj.list.length < this.form.pageSize) {
          this.finished = true
        }
      }, err => {
        this.loading = false
        console.log(err)
      })
    }
  },
}
</script>

<style lang="less" scoped>
.room-info {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  cursor: pointer;
}
.room-label {
  color: #666;
}
.legend {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  padding-top: 10px;
  background: #fff;
  /deep/ .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .block {
    width: 40px;
    height: 15px;
    border-radius: 3px;
    margin-right: 4px;
    display: inline-block;
  }
}
.title-block {
  padding-left: 14px;
  color: #333;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
}
</style>