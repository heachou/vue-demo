<template>
  <div class="add-icon" @click="click">
    <van-icon name="plus" class="icon-plus" />
  </div>
</template>

<script>
export default {
  name: 'add-icon',
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.add-icon {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  cursor: pointer;
  width: 44px;
  height: 44px;
  background-image: linear-gradient(150deg, #0fccce 0%, #10deb8 100%),
    linear-gradient(#0086f7, #0086f7);
  background-blend-mode: normal, normal;
  border: solid 1px #38d4fc;
  border-radius: 50%;
  overflow: hidden;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>