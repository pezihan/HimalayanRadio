// 底部播放器
<template>
    <div class="contents">
        <div class="content_play">
            <div class="content_play_left">
                <img src="../assets/images/play.png" alt="">
                <div>
                    <i class="iconfont icon-shangyiqu"></i>
                    <i @click="bofang" :class="bofangState===false?'iconfont icon-bofang':'iconfont icon-bofangzhong'"></i>
                    <i class="iconfont icon-xiayiqu"></i>
                </div>
            </div>
            <div class="content_play_cneter">
                <a href="">夏天的风 - 蓝心羽</a>
                <div class="centetr">
                    <div class="center_left">
                        <audio ref="audios" src="../assets/audio/夏天的风 - 蓝心羽.mp3"></audio>
                        <div ref="bofang"></div>
                        <div ref="beijin"></div>
                    </div>
                    <div class="center_rigth">
                        <span>{{currentTimeText}} /</span>
                        <a> {{durationText}}</a>
                    </div>
                </div>
            </div>
            <div class="content_play_rigth">
                <div>
                    <i class="iconfont icon-aixin"></i>
                    <i class="iconfont icon-xiazai"></i>
                    <i class="iconfont icon-fenxiang"></i>
                </div>
                <div>
                    <i class="iconfont icon-yinliang"></i>
                    <i class="iconfont icon-suijibofang"></i>
                    <i class="iconfont icon-bofangliebiao"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bofangState: false,
      // 音频总长度
      duration: 0,
      // 当前音频播放的位置
      currentTime: 0
    }
  },
  methods: {
    bofang () {
      this.bofangState = !this.bofangState
      if (this.bofangState === true) {
        this.$refs.audios.play()
        var timer = setInterval(() => {
          this.currentTime = this.$refs.audios.currentTime
          this.$refs.beijin.style.left = this.currentTime * (500 / this.duration) + 'px'
          this.$refs.bofang.style.width = this.currentTime * (500 / this.duration) + 'px'
        }, 1000)
      } else {
        this.$refs.audios.pause()
        clearInterval(timer)
      }
      this.duration = this.$refs.audios.duration
    }
  },
  computed: {
    durationText () {
      let hour = parseInt(parseInt(this.duration) / 3600)
      let minute = parseInt(parseInt(this.duration) / 60)
      let second = parseInt(this.duration) % 60
      if (hour.toString().length === 1) {
        hour = '0' + String(hour)
      }
      if (minute.toString().length === 1) {
        minute = '0' + String(minute)
      }
      if (second.toString().length === 1) {
        second = '0' + String(second)
      }
      const text = hour + ':' + minute + ':' + second
      return text
    },
    currentTimeText () {
      let hour = parseInt(parseInt(this.currentTime) / 3600)
      let minute = parseInt(parseInt(this.currentTime) / 60)
      let second = parseInt(this.currentTime) % 60
      if (hour.toString().length === 1) {
        hour = '0' + String(hour)
      }
      if (minute.toString().length === 1) {
        minute = '0' + String(minute)
      }
      if (second.toString().length === 1) {
        second = '0' + String(second)
      }
      const text = hour + ':' + minute + ':' + second
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
    .contents {
        z-index: 100;
        height: 50px;
        width: 100%;
        background: -webkit-linear-gradient(top,#575757,#2a2a2a);
        opacity: .9;
        position: fixed;
        left: 0;
        bottom: 0;
        .content_play {
            width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .content_play_left {
                display: flex;
                justify-content: space-between;
                align-items: center;
                img {
                    width: 40px;
                    height: 40px;
                }
                div {
                    width: 110px;
                    height: 30px;
                    margin-left: 10px;
                    .iconfont {
                        color: #fff;
                        padding: 5px;
                        font-size: 20px;
                        vertical-align: middle;
                        &:hover {
                            color: #f86442;
                        }
                    }
                    .icon-bofang,.icon-bofangzhong {
                        font-size: 30px;
                    }
                }
            }
            .content_play_cneter {
                width: 630px;
                a {
                    font-size: 12px;
                    color: #fff;
                }
                .centetr {
                    height: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 5px;
                    .center_left {
                        position: relative;
                        height: 2px;
                        width: 500px;
                        background-color: #050505;
                        div {
                            &:nth-of-type(1) {
                                width: 0px;
                                height: 2px;
                                background-color: #f86442;
                                position: absolute;
                                top: 0px;
                                left: 0;
                            }
                            &:nth-of-type(2) {
                                width: 10px;
                                height: 10px;
                                border-radius: 50%;
                                background-color: #fff;
                                position: absolute;
                                top: -4px;
                                left: 0px;
                            }
                        }
                    }
                    .center_rigth {
                        margin-bottom: 8px;
                        span {
                            font-size: 12px;
                            font-weight: 400;
                            color: #fff;
                            font-weight: 300;
                        }
                        a {
                            font-size: 12px;
                            font-weight: 300;
                        }
                    }
                }
            }
            .content_play_rigth {
                width: 280px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 20px;
                div {
                    padding:0 20px;
                    &:nth-of-type(1) {
                        border-right: 1px solid #999999;
                        .iconfont {
                            color: #fff;
                            font-size: 20px;
                            padding: 0 10px;
                            &:hover {
                                color: #f86442;
                            }
                        }
                    }
                    &:nth-of-type(2) {
                        .iconfont {
                            color: #fff;
                            font-size: 20px;
                            padding: 0 10px;
                            &:hover {
                                color: #f86442;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
