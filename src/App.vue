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
      number: this.$route.query.number || window.sessionStorage.getItem("number")
    };
  },
  created(){
    // alert(window.location.href)
  },
  mounted() {
    // this.getDetailInfo(this.number);
  },
  watch:{
    '$route'(to,from){
      if(to.query.number){
        this.getDetailInfo(to.query.number)
      }
    }
  },
  computed: {
    ...mapState(["user"])
  },
  components: {},
  methods: {
    getDetailInfo(number) {
      if (!number) {
        return this.$toast.fail("未获取到number");
      }
      window.sessionStorage.setItem('number',number)
      const params = {
        number
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
            let FleetNum = list[_index].FleetNum;
            let _arr = FleetNum.split("-");
            let _str = "";
            for (let i = 0; i < _arr.length; i++) {
              let item = list.filter(
                a => a.FleetNum === _arr.slice(0, i + 1).join("-")
              )[0];
              if (item) {
                _str += item.NAME;
              }
            }
            this.setFleetInfo({
              text: _str,
              FleetNum: FleetNum
            })
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    ...mapMutations(["setUser",'setFleetInfo'])
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
