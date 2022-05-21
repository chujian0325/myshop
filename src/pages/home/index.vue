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
      <swiper-item v-for="item in imgList" :key="item.goods_id">
        <image :src="item.image_src" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import * as resData from '../data'
export default {
  data () {
    return {
      imgList: []
    }
  },
  mounted () {
    this.swiperData()
  },
  methods: {
    swiperData () {
      // 请求后台接口，获取轮播数据
      let that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      //   success: function (res) {
      //     console.log(res)
      //     let { message } = res.data
      //     that.imgList = message
      //   }
      // })
      that.imgList = resData.imgList
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