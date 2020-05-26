<template>
  <van-cell-group>
  <van-cell title="楼栋数量" :value="`${item.buildings}栋`" />
  <van-cell title="房间数量" :value="`${item.tenantHouseNum + item.ownerHouseNum + item.freeHouseNum}套`" />
  <van-cell title="自住房间" :value="`${item.ownerHouseNum}套`" />
  <van-cell title="出租房间" :value="`${item.tenantHouseNum}套`" />
  <van-cell title="空置房间" :value="`${item.freeHouseNum}套`" />
  <van-cell title="居住人数" :value="`${item.popilationNum}人`" />
  <van-cell title="业主" value="340" />
  <van-cell title="租客" value="340" />
</van-cell-group>
</template>

<script>
export default {
  name: 'build-detail',
  data(){
    return {
      item: this.$route.query
    }
  }
}
</script>

<style>

</style>