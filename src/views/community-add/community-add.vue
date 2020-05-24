<template>
  <div>
    <top-header></top-header>
    <div class="main">
        <form-add @submit="submit"></form-add>
    </div>
  </div>
</template>

<script>
import FormAdd from './form-add'
import { Header } from "@/components"
import {insertCommunity} from '@/api/index'

export default {
  name: "community-add",
  data(){
    return{
      
    }
  },
  methods:{
    submit(params){
      insertCommunity(params).then(res=>{
        this.$toast("添加成功")
        this.$router.go(-1)
      },err=>{
        console.log(err)
      })
    }
  },
  components:{
    topHeader: Header,
    FormAdd
  }
}
</script>

<style>

</style>