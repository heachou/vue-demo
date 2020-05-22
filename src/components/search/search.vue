<template>
  <form action="/">
    <van-search v-model="value" show-action placeholder="请输入内容点击搜索" @search="onSearch">
      <template #action>
        <div @click="onSearch" class="text">搜索</div>
      </template>
    </van-search>
  </form>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onCancel() {
    },
    onSearch(val) {
      let value = typeof val === 'string' ? val : this.value
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="less" scoped>
.text {
  font-size: 14px;
  letter-spacing: 0px;
  color: #5db4f9;
}
</style>