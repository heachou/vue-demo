<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <van-tabs v-model="active" color="#2ac9f3">
        <van-tab title="绑定房屋">
          <div>
            <form-add @add="add"></form-add>
          </div>
        </van-tab>
        <van-tab title="实有人口">实有人口</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Header } from "@/components"
import FormAdd from './form-add'
export default {
  name: "city-bind",
  data(){
    return {
      active: 2
    }
  },
  methods:{
    add(){
      this.$router.push('/people-add')
    }
  },
  components: {
    topHeader: Header,
    FormAdd
  }
};
</script>

<style>
</style>