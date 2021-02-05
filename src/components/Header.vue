<template>
        <div class="header">
            <div class="header_content">
                <a class="logo" href="http://wwww.baidu.com"><img src="../assets/logo.png" alt=""></a>
                <div class="content_my"  >
                    <a @mouseover = 'myMove(0)' href="">发现</a>
                    <a @mouseover = 'myMove(1)' href="">我的</a>
                    <a @mouseover = 'myMove(2)' href="">App下载</a>
                    <div ref="my"></div>
                </div>
                <div class="content_search">
                    <input type="text" placeholder="专辑/声音/用户">
                    <div><i class="iconfont icon-sousuo"></i></div>
                </div>
                <div class="content_extend">
                    <div @mouseover="iconUploadShow = true" @mouseout = "iconUploadShow = false"><i class="iconfont icon-shangchuan"></i><p>上传</p></div>
                    <div><i class="iconfont icon-chuangzuozhongxin"></i><p>创作中心</p></div>
                    <div><i class="iconfont icon-A"></i><p>有声出版</p></div>
                    <div><i class="iconfont icon-yinxiang"></i><p>小雅音响</p></div>
                    <transition name="iconUploadShow">
                    <a class="iconUpload" v-show="iconUploadShow" @mouseover="iconUploadShow = true" @mouseout = "iconUploadShow = false">
                        <div><i class="iconfont icon-jiandao"></i><p>音频剪辑</p></div>
                        <div><i class="iconfont icon-shangchuan"></i><p>上传节目</p></div>
                        <div><i class="iconfont icon-icon--"></i><p>我的节目</p></div>
                        <div><i class="iconfont icon-qiyeruzhu"></i><p>主播入驻</p></div>
                    </a>
                    </transition>
                </div>
                <div class="content_user"><img src="../assets/fonts/noLogin.png" alt=""></div>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      iconUploadShow: false
    }
  },
  methods: {
    // 选择栏移动
    myMove (event) {
      if (event === 0) {
        this.$refs.my.style.left = '20px'
      } else if (event === 1) {
        this.$refs.my.style.left = '80px'
      } else {
        this.$refs.my.style.left = '150px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .header {
        position:fixed;
        top: 0;
        height: 60px;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 1px 1px 2px #e7e7e7;
        z-index: 100;
        .header_content {
            width: 1100px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo{
                width: 120px;
                display: flex;
                align-items: center;
                img {
                    width: 100%;
                    height: 30px;
                }
            }
            .content_my {
                position: relative;
                text-align: center;
                line-height: 60px;
                a {
                    padding: 15px;
                    font-size: 15px;
                }
                div {
                    width: 20px;
                    display: inline-block;
                    border-bottom: 3px solid #f86442;
                    position:absolute;
                    left: 25px;
                    bottom: 0;
                    transition: .4s;
                }
            }
            .content_search {
                width: 340px;
                height: 40px;
                border-radius: 25px;
                border: 1px solid #f86442;
                overflow: hidden;
                input {
                    padding: 10px;
                }
                div {
                    height: 100%;
                    width: 60px;
                    display: inline-block;
                    background: -webkit-linear-gradient(left,#ff9973,#ff7353);
                    float: right;
                    text-align: center;
                    line-height: 40px;
                    i {
                        font-size: 30px;
                        color: #fff;
                    }
                }
            }
            .content_extend {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding: 10px;
                    i {
                        font-size: 25px;
                        color: #cdcdcd;
                    }
                    p {
                        height: 16px;
                    }
                    &:hover i{
                        color: #f87253;
                    }
                }
                .iconUpload {
                    position: absolute;
                    border-top: 2px solid #fa825e;
                    width: 290px;
                    height: 60px;
                    bottom: -60px;
                    left: -125px;
                    display: flex;
                    justify-content: center;
                    background-color: #fff;
                    box-shadow: 0px 1px 1px 2px #e7e7e7;
                }
            }
            .content_user {
                padding: 10px;
                img {
                    border-radius: 50%;
                }
            }
        }
    }

    .iconUploadShow-enter-active,.iconUploadShow-leave-active {
        opacity: 1;
        transform: rotate(0.5);
        transition: .3s;
    }
    .iconUploadShow-enter,.iconUploadShow-leave-to {
        opacity: 0;
        transform: rotate(1);
        transition: .3s;
    }
</style>
