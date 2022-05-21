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
      <swiper-item v-for="item in imgList" :key="item.image_src">
        <image :src="item.image_src" />
      </swiper-item>
    </swiper>
    <!-- 菜单 -->
    <div class="menu">
      <div v-for="item in menuList" :key="item.image_src" class="menu-item">
        <img :src="item.image_src" alt="">
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as resData from '../data'
// import request from '../../utils/request'
export default {
  data () {
    return {
      imgList: [],
      menuList: []
    }
  },
  mounted () {
    this.swiperData()
    this.menuData()
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
      // let url = 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata'
      // request(url).then(res => {
      //   that.imgList = res.data.imgList
      // })
      that.imgList = resData.imgList
    },
    // 或者
    // async swiperData () {
    //   // 请求后台接口，获取轮播数据
    //   // let url = 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata'
    //   let res = await request('home/swiperdata')
    //   this.imgList = resData.imgList
    // },
    menuData () {
      // 请求后台接口，获取轮播数据
      // let that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
      //   success: function (res) {
      //     console.log(res)
      //     let { message } = res.data
      //     that.menuList = message
      //   }
      // })
      // let res = await request('home/catitems')
      this.menuList = resData.menuList
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
.menu {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.menu .menu-item img {
  width: 128rpx;
  height: 140rpx;
}
</style>