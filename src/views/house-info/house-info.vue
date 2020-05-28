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
  name: "house-info",
  data(){
    return {
      query: this.$route.query
    }
  },
  methods:{
    add(){
      this.$router.push({
        path: '/person-add',
        query: {}
      })
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