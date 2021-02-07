<template>
    <div>
        <!-- 顶部工具栏 -->
        <vueHeader v-show="headerShow"></vueHeader>
        <!-- 轮播图 -->
        <div class="slideshow">
          <el-carousel :interval="4000" type="card" height="240px" indicator-position="none" autoplay loop trigger>
            <el-carousel-item v-for="(item, index) in headerImages" :key="index">
              <img class="img" :src="item.url" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 导航栏 -->
        <navter></navter>
        <!-- 猜你喜欢 -->
        <like :likeData="likeData"></like>
        <!-- 内容分类 -->
        <contents :contents="contents"></contents>
        <!-- 榜单推荐 -->
        <list :listData="listData"></list>
        <!-- 底部广告栏 -->
        <advertising></advertising>
        <!-- 底部占位 -->
        <div class="zhanwei"></div>
        <!-- 右侧按钮 -->
        <rightButton></rightButton>
        <!-- 底部播放器 -->
        <player></player>
    </div>
</template>

<script>
// 模拟数据
import htmlData from '@/data.json'
import vueHeader from '@/components/Header'
import navter from '@/components/Nav'
import like from '@/components/Like'
import contents from '@/components/Contents'
import list from '@/components/List'
import advertising from '@/components/Advertising'
import rightButton from '@/components/RightButton'
import player from '@/components/Player'
export default {
  data () {
    return {
      headerShow: true,
      // 轮播图数据
      headerImages: [],
      // 猜你喜欢
      likeData: [],
      // 分类内容区
      contents: [],
      // 榜单推荐数据
      listData: {},
      // 页面滚动距离
      distance: 0
    }
  },
  mounted () {
    this.headerImages = htmlData.headerImages
    this.likeData = htmlData.like
    this.contents = htmlData.contents
    this.listData = htmlData.bottomData
    window.addEventListener('scroll', this.getScroll)
  },
  methods: {
    // 监听滚动
    getScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= this.distance) {
        this.distance = scrollTop
        this.headerShow = false
      } else if (scrollTop <= this.distance) {
        this.distance = scrollTop
        this.headerShow = true
      }
    }
  },
  components: {
    vueHeader,
    navter,
    like,
    contents,
    list,
    advertising,
    rightButton,
    player
  }
}
</script>

<style lang="scss" scoped>
    .slideshow {
      margin-top: 80px;
      height: 240px;
    }
    .el-carousel {
      width: 1100px;
      margin: 0 auto;
      &::-webkit-scrollbar {
        /*隐藏滚轮*/
         display: none;
      }
      .el-carousel__item {
        border-radius: 10px;
      }
    }

    // 占位
    .zhanwei {
      height: 80px;
      width: 100%;
    }
</style>
