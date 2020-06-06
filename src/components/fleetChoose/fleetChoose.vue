<template>
  <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
    <div v-for="(item_arr,index) in items" :key="index" style="padding:10px">
      <van-row gutter="12">
        <van-col
          span="8"
          v-for="item in item_arr.arr"
          :key="item.FleetNum"
          style="margin-bottom:10px"
        >
          <van-button
            size="small"
            :type="item_arr.activeFleetNum === item.FleetNum ? 'primary':'default' "
            block
            @click="clickItem(item,item_arr,index)"
          >{{item.NAME}}</van-button>
        </van-col>
      </van-row>
      <van-divider v-show="index !== items.length-1"></van-divider>
    </div>
    <div style="padding:12px">
      <van-row gutter="12">
        <van-col span="12">
          <van-button block type="info" @click="submit" :disabled="disable">确定</van-button>
        </van-col>
        <van-col span="12">
          <van-button block type="default" plain @click="cancel">取消</van-button>
        </van-col>
      </van-row>
    </div>
  </van-popup>
</template>

<script>
import { queryFleetByFleetNum } from "@/api/index";
export default {
  name: "fleet-choose",
  props: {
    show: {
      default: false
    },
    initFleetNum: {
      default: ""
    }
  },
  data() {
    return {
      activeIndex: 0,
      items: []
    };
  },
  computed: {
    disable() {
      let len = this.items.length;
      let lastItem = this.items[len - 1];
      return !!(lastItem && !lastItem.activeFleetNum);
    }
  },
  created() {
    this.getFleetNum(this.initFleetNum);
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    submit() {
      let len = this.items.length;
      let lastItem = this.items[len - 1];
      if (lastItem && !lastItem.activeFleetNum) {
        return this.$toast("请选择到最后一级");
      }
      let levelName = "";
      this.items.forEach(item => {
        levelName += item.activeFleetName;
      });
      console.log(lastItem)
      this.$emit("submit", {
        fleetNum: lastItem.activeFleetNum,
        levelName,
        fleetId: lastItem.activeFleetId
      });
    },
    getFleetNum(fleetNum, level = 0) {
      if (!fleetNum) {
        return;
      }
      const params = {
        fleetNum
      };
      queryFleetByFleetNum(params).then(
        res => {
          if (level < this.items.length - 1) {
            this.items = this.items.slice(0, level + 1);
          }
          if (res.obj) {
            this.items.push({
              activeFleetNum: "",
              activeFleetName: "",
              activeFleetId: "",
              arr: res.obj
            });
          }
        },
        err => {
          if (level < this.items.length - 1) {
            this.items = this.items.slice(0, level + 1);
          }
          console.log(err);
        }
      );
    },
    clickItem(item, parentItem, index) {
      parentItem.activeFleetNum = item.FleetNum;
      parentItem.activeFleetName = item.NAME;
      parentItem.activeFleetId = item.FLEET_ID
      console.log(item);
      this.getFleetNum(item.FleetNum, index);
    }
  }
};
</script>

<style>
</style>