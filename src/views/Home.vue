<template>
    <div>
        <!-- 顶部工具栏 -->
        <vueHeader></vueHeader>
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
    </div>
</template>

<script>
import htmlData from '@/data.json'
import vueHeader from '@/components/Header'
import navter from '@/components/Nav'
import like from '@/components/Like'
import contents from '@/components/Contents'
export default {
  data () {
    return {
      // 轮播图数据
      headerImages: [],
      // 猜你喜欢
      likeData: [],
      // 分类内容区
      contents: []
    }
  },
  mounted () {
    this.headerImages = htmlData.headerImages
    this.likeData = htmlData.like
    this.contents = htmlData.contents
  },
  components: {
    vueHeader,
    navter,
    like,
    contents
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
</style>
