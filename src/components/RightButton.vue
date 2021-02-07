<template>
    <div class="cntents_rigth" @mouseleave="moveShow = fasle">
        <div class="content_left" ref="move" v-show="moveShow">{{text}}</div>
        <div class="content_rigth_one" @mouseover="mouseoverDiv(1)" v-show="buttonShow" @click="topBootom">
            <i class="iconfont icon-xiangshang"></i>
        </div>
        <div class="content_rigth_two" @mouseover="mouseoverDiv(2)">
            <i class="iconfont icon-yijianfankui"></i>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: '返回顶部',
      // 气泡是否显示
      moveShow: false,
      // 返回顶部按钮的显示隐藏
      buttonShow: false,
      scrollTop: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  },
  methods: {
    // 鼠标移入按钮显示气泡
    mouseoverDiv (i) {
      this.moveShow = true
      if (i === 1) {
        this.text = '返回顶部'
        this.$refs.move.style.top = 5 + 'px'
      } else {
        this.text = '意见反馈'
        if (this.buttonShow === true) {
          this.$refs.move.style.top = 50 + 'px'
        } else {
          this.$refs.move.style.top = 15 + 'px'
        }
      }
    },
    // 返回顶部按钮的显示与隐藏
    getScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (scrollTop <= 500) {
        this.buttonShow = false
      } else if (scrollTop > 500) {
        this.buttonShow = true
      }
    },
    // 回到顶部事件
    topBootom () {
    //   document.documentElement.scrollTop = 0
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>

<style lang="scss" scoped>
    .cntents_rigth {
        width: 130px;
        height: 70px;
        position: fixed;
        right: 45px;
        bottom: 90px;
        .content_left {
            position: absolute;
            height: 28px;
            width: 80px;
            box-shadow: 0px 0px 5px 1px rgb(224, 224, 224);
            text-align: center;
            line-height: 28px;
            font-size: 13px;
            color: #f86442;
            top: 5px;
            transition: .3s;
        }
        .content_rigth_one {
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            text-align: center;
            line-height: 35px;
            float: right;
            clear: right;
            position: relative;
            i {
                font-size: 20px;
                color: #a3a3ac;
                &:hover {
                    color: #f86442;
                }
            }
        }
        .content_rigth_two {
            width: 35px;
            height: 35px;
            background-color: #f3f3f3;
            text-align: center;
            line-height: 35px;
            margin-top: 10px;
            float: right;
            clear: right;
            i {
                font-size: 20px;
                color: #a3a3ac;
                &:hover {
                    color: #f86442;
                }
            }
        }
    }
</style>
