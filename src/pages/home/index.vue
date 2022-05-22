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
    <!-- 商品列表 -->
    <div class="floor" v-for="(item,index) in floorList" :key="index">
      <div class="floor-title">
        {{ item.floor_title.name }}
      </div>
      <div class="floor-content" >
        <div class="left">
          <img :src="item.product_list[0].image_src" alt="" mode="aspectFill">
        </div>
        <div class="right">
          <div v-for="(item, i) in item.product_list" :key="i">
            <img v-if="i>0"  :src="item.image_src" alt="" mode="aspectFill">
          </div>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="toTop" v-if="isShow" @click="goToTop">
      ^
      <p>顶部</p>
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
      floorList: [],
      isShow: false,
      menuList: []
    }
  },
  mounted () {
    this.swiperData()
    this.menuData()
    this.floorData()
  },
  onPageScroll (event) {
    // 小程序页面生命周期：监控页面的滚动
    // 如果滚动到指定位置就控制显示和隐藏
    this.isShow = event.scrollTop > 50
  },
  methods: {
    goToTop () {
      // 原生
      // wx.pageScrollTo({
      //   scrollTop: 0
      // })
      // 这里使用mpvue中的方法
      mpvue.pageScrollTo({
        scrollTop: 0
      })
    },
    floorData () {
      // let res = await request('home/floordata')
      this.floorList = resData.floorList
    },
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
.floor {
  margin-top: 20rpx;
}
.floor-title {
  width: 100%;
  padding-left: 20rpx;
}
.floor-content {
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
}
.floor-content .left img{
  width: 232rpx;
  height: 385rpx;
}
.floor-content .right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap ;
  margin-left: 14rpx;
}
.floor-content .right img{
  width: 232rpx;
  height: 188rpx;
}
.toTop{
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  position: fixed;
  right: 40rpx;
  bottom: 40rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toTop p {
  font-size: 16rpx;
}
</style>