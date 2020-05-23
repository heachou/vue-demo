<template>
  <div>
    <top-header></top-header>
    <div class="main">
        <form-add></form-add>
    </div>
  </div>
</template>

<script>
import FormAdd from './form-add'
import { Header } from "@/components"

export default {
  name: "community-add",
  data(){
    return{
      
    }
  },
  methods:{

  },
  components:{
    topHeader: Header,
    FormAdd
  }
}
</script>

<style>

</style>