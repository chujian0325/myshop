<template>
  <!-- 搜索条 -->
  <div class="search-bar">
    <div class="search-input">
      <input type="text" placeholder="搜索">
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data () {

  }
}
</script>
<style scoped>
.search-bar {
  background-color: #fe2d4a;
  padding: 20rpx;
}
.search-input {
  background-color: #fff;
  text-align: center;
}
</style>