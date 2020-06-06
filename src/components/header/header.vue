<template>
  <div class="header">
    <div class="left" >
      <van-icon name="arrow-left" class="icon-left" @click="clickLeft"/>
      <span class="text" @click="toggleFleet">{{fleetInfo.text && fleetInfo.text.replace("中国","")}}</span>
      <i class="el-icon-aim icon-text-after"></i>
    </div>
    <div class="right">
        <i class="el-icon-office-building "></i>
        <van-icon :name="`${rightIcon || 'home-o'}`" class="icon-build"></van-icon>
        <span class="text">{{rightText || '城镇小区'}}</span>
    </div>
    <!-- 00-025-002-001-003 00-025-002-001-003 -->
    <!-- fleetInfo.FleetNum -->
    <fleet-choose :show="fleetShow" :initFleetNum="`00-025-002-001-003`" @submit="onfleetChooseConfirm" @cancel="fleetShow = false"></fleet-choose>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import  FleetChoose from '../fleetChoose/fleetChoose'

export default {
  name: 'top-header',
  props:{
    rightText:{
      default:''
    },
    rightIcon:{
      default:''
    }
  },
  data(){
    return {
      fleetShow: false
    }
  },
  computed:{
    ...mapState(["user" ,"fleetInfo"])
  },
  methods:{
    clickLeft(){
      this.$router.go(-1)
    },
    toggleFleet(){
      this.fleetShow = true
    },
    onfleetChooseConfirm(params){
      console.log(params)
      this.fleetShow = false
      this.setFleetInfo({
        FleetNum: params.fleetNum,
        text: params.levelName
      })
      const user = {
        ...this.user,
        FLEET_ID:params.fleetId
      }
      this.setUser(user)
    },
    ...mapMutations(["setUser","setFleetInfo"])
  },
  components:{
    FleetChoose
  }
}
</script>

<style scoped lang="less">
.header {
  height: 48px;
  background: #2ac9f3;
  padding: 0 12px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
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
  .icon-text-after {
    font-size: 16px;
    margin-left: 2px;
    color: #fff;
  }
  .icon-left {
    font-size: 16px;
    margin-right: 4px;
    color: #fff;
  }
  .text {
    color: #fff;
    font-size: 14px;
  }
}
</style>