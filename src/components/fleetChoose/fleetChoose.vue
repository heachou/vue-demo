<template>
  <div>
      <van-row>
      </van-row>
  </div>
</template>

<script>
import { queryFleetByFleetNum } from '@/api/index'

export default {
  name: 'fleets-choose',
  props: ['show', 'initFleetNum'],
  data() {
    return {
      activeIndex: 0,
      items: [],
    }
  },
  created() {
    this.getFleetNum(this.initFleetNum)
  },
  methods: {
    getFleetNum(fleetNum, level = 0) {
      const params = {
        fleetNum
      }
      queryFleetByFleetNum(params).then(res => {
        if (level < (this.items.length - 1)) {
          this.items = this.items.slice(0, level)
        }
        if (res.obj) {
          this.items.push(res.obj)
        }
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
</style>