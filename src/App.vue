<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getQueryBasicInfo, queryFleetLevel } from "@/api/index";
import { getDetailInfo } from "@/api/login";

export default {
  name: "app",
  data() {
    return {
      number: this.$route.query.number
    };
  },
  created() {
    
    // this.getDetailInfo();
  },
  mounted(){
    setTimeout(()=>{
console.log(this.$route.query)

    },20)
  },
  components: {},
  methods: {
    getDetailInfo() {
      if (!this.number) {
        return this.$toast.fail("未获取到number");
      }
      const params = {
        number: this.number
      };
      getDetailInfo(params).then(
        res => {
          this.setUser(res.obj);
          this.$nextTick(this.queryFleetLevel);
        },
        err => {
          console.log(err);
        }
      );
    },
    queryFleetLevel() {
      const params = {
        fleetId: this.user.FLEET_ID
      };
      queryFleetLevel(params).then(
        res => {
          let list = res.obj.list || [];
          let _index = list.findIndex(a => a.NAME === this.user.fleetName);
          if (_index > -1) {
            let fleetName = list[_index].FleetNum;
            let _arr = fleetName.split("-");
            console.log(_arr);
            let _str = "";
            for (let i = 0; i < _arr.length; i++) {
              let item = list.filter(
                a => a.FleetNum === _arr.slice(0, i + 1).join("-")
              )[0];
              if (item) {
                _str += item.NAME;
              }
            }
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    ...mapMutations(["setUser"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
