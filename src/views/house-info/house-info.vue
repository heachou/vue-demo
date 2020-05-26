<template>
  <div>
    <top-header></top-header>
    <div class="main">
      <form-add @add="add"></form-add>
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