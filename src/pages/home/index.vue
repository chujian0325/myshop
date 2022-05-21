<template>
  <div>
    <!-- 搜索条 -->
    <div class="search-bar">
      <div class="search-input">
        <input type="text" placeholder="搜索">
      </div>
    </div>
    <!-- 轮播图 -->
    <swiper :indicator-dots="true">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <image :src="item" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: []
    }
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