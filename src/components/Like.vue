<template>
    <div class="like">
        <div class="like_left">
            <div class="like_content_top">
                <div class="like_top">猜你喜欢</div>
                <div><i class="iconfont icon-shuaxin"></i>换一批</div>
            </div>
            <div class="like_content_bottom">
                <div v-for="item in likeData" :key="item.img" class="content_item">
                    <div class="content_img">
                        <img class="zhutu" :src="item.img" alt="">
                        <div class="content_title"><i class="iconfont icon-erji"></i>{{item.sum}}</div>
                        <img class="bofang" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA/FBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5g2j+6eT5jHL6k3v+9PH+7ur9yb37o4//+ff+5N790Mb7s6L6moT5hWr//Pv+7Of93dX7qJT5h27+8O38wbP8uar7rJr8vK36non939j6oIuNLd5VAAAAOHRSTlMABo2JSPAE/NTE89vRIgjuzMjmv6ihSxr1TkRCPR4XDbiRj1Lou7SrJNmFbiquaVZ1Wy4U4pmANT4TenoAAAPzSURBVHja1duHehJBFAXgu4WFpUivAULHmJjEfhCCqElM0Wj0/d/FEv0msgiz0xb/Jziwd+bOzsySkExl3x4XE4VsEkhmC4ni2N6vZMiI6lHXT2KlpN87qpJOD9zuHjbY67kWaWFVyjFwiZUr6jM8dAYIYdA9IJWaI4Tm10mVfhpCcmoiuDkIy7nyz34EKcMDuXFnxyEp7jwgYY0UFEjtiP58Jw41Xgj9CU8TUCYtUAlPklCo9oTC8XpQzPYoBKsE5R6HKITdDjQo7hKndg5a5NrEJZOCJqkMcXi2B21SbY7nn4NG6Y11YA2hVdGitbwxNHvs0To9aOesnX9hQH1N/6nBgGzrn/03DSPyFq3WhQz5MmjAmObKB5CCMQmLgmwYdEwBB3EYVAuOhA6MGtMSF4Ytr9XzMMynv/QhRX4opmFcR3gOujy9nd3ezCHrldgQmN9Ofjk/PYGcx/fewcHtYjr5Y/oectgS1QGvD7PJPd9eQ8Yj+s0agNebyV/OP32AuIFFd+rgdjZZMruEOJfulMHr7SRIohjLv/twDLzmE0ZBMcassG3g9WSlxQXENMKsxFiAoGvBYrTppxSYkAGYs3cQkKAfqmDCB2BO3yK8KhEdgREIwMwEirEfKAGBAMzVRzDcReCDEQvAXL9BOD6RlwQTMoB8McZYJ5QLwJzfhCrGFmsEwgGk2oNL+2DkAjCfT8DrkGwoC8BMuYvRobHKAMyCc0SWqKg0ADPlGw5FSqgNwEzn4JCmguIAzBU4FCimOgAzx2ZZqukLwDMUahTXF+ALNotHHyDyR6CxCD/yFKHGYfgZHJ7rm4iu+SYifVPxV/AYamtGc3ApRd+OI1+QVABEuiTLgIlkUcpmokiW5VvwYkI9MOZfzbbh5TTS1/M2/bAHxvwGRaAIjG7ROFFuUrFTCysGXheqt+lCb1SeK92ofEF3KuC2CIy9rxDXoDteAbwulyb+L0o2q8kBt4XK7XqRA4uTmY4DCxqB28kVW3XIGRGzgxDe3SzOrj5dQFaT7snBuDzdV4dxlYiPbvPbdnhNIxhVomUP4zAoWaUABwYdb+MlFtqBKfGmrptsobpQkBX1VS46SMKAbJX+qQ8D6rSGDe0e0TpeCZqVPFrL6kCroRXttd7c7vZfbNZ6tbtFXJ7loUWuHe31/uHu//OBA5HnQLFHHoXTGEChbIVCq/pQJp8hAd7LONToWiSmmYAC6SYJ8/aTkFR7aZGMahlSRi2SteNLFN8OqdDsQEi+Qqo8LccR1rBOKrWOnyOEgpMh1TyX98PnbNn1SAurYSewQcJuWKRTu2/7MawU8+1+m4zIuIdOqZj+8/l/ulhyDl2xEf8dLVX8/WrSz1AAAAAASUVORK5CYII=" />
                    </div>
                    <span>{{item.title}}</span>
                    <a>{{item.author}}</a>
                </div>
            </div>
        </div>
        <div class="like_rigth">
            <div class="rigth_content_top">
                <div class="top_img">
                    <img src="../assets/fonts/noLogin.png" alt="">
                    <div>登录一下，让我了解你</div>
                </div>
                <div class="bottom_button">
                    <button>登录</button>
                </div>
            </div>
            <div class="rigth_content_bottom">
                <img src="../assets/images/1.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.likeData)
  },
  props: {
    likeData: Array
  }
}
</script>

<style lang="scss" scoped>
    .like {
        width: 1100px;
        height: 250px;
        margin: 0 auto;
        display: flex;
        .like_left {
            display: flex;
            flex-direction: column;
            .like_content_top {
                display: flex;
                justify-content: space-between;
                margin: 0 14px;
                height: 45px;
                .like_top {
                    font-size: 18px;
                    &::before {
                        content: '';
                        width: 5px;
                        height: 18px;
                        display: inline-block;
                        background-color: #f86442;
                        vertical-align: middle;
                        margin-right: 10px;
                        border-radius: 2px;
                    }
                }
                .iconfont {
                    margin-right: 5px;
                }
                div {
                   &:nth-of-type(2):hover {
                       color: #f86442;
                   }
                }
            }
            .like_content_bottom {
                display: flex;
                .content_item {
                    margin: 0 14px;
                    .content_img {
                        position: relative;
                        width: 140px;
                        height: 140px;
                        border-radius: 10px;
                        overflow: hidden;
                        &::after {
                            content: '';
                            background: rgba(0,0,0,.2);
                            display: none;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        }
                        &:hover::after{
                            display: inline-block;
                        }
                        &:hover .zhutu{
                            transform: scale(1.1);
                        }
                        img {
                            transition: .5s;
                        }
                        .bofang {
                            width: 50px;
                            height: 50px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%) scale(0);
                            z-index: 10;
                        }
                        &:hover .bofang {
                            transform: translate(-50%,-50%) scale(1.2);
                        }
                        .content_title {
                        position: absolute;
                        width: 70px;
                        height: 20px;
                        background-color: rgba(0,0,0,.8);
                        color: #fff;
                        bottom: 0;
                        right: 0;
                        font-weight: 300;
                        font-size: 12px;
                        text-align: center;
                        line-height: 20px;
                        z-index: 6;
                        .iconfont {
                            font-size: 14px;
                            margin-right: 3px;
                        }
                    }
                    }
                }
                span {
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    width: 120px;
                    display: block;
                    margin-top: 5px;
                    height: 20px;
                    &:hover {
                        color: #f86442;
                    }
                }
                a {
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    width: 120px;
                    &:hover {
                        color: #f86442;
                    }
                }
            }
        }
        .like_rigth {
            .rigth_content_top {
                height: 145px;
                border-radius: 5px;
                overflow: hidden;
                .top_img {
                    width: 260px;
                    height: 70px;
                    background-color: #ffe2cf;
                    color: #72727b;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    text-align: center;
                    font-size: 14px;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                    }
                    div {
                        height: 16px;
                        margin-right: 20px;
                    }
                }
                .bottom_button {
                    border-radius: 5px;
                    overflow: hidden;
                    width: 260px;
                    height: 55px;
                    background-color: #f9f9fa;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    button {
                        width: 90px;
                        height: 25px;
                        color: #fff;
                        border-radius: 15px;
                        background: -webkit-linear-gradient(left,#fe9f7d,#fe7858);
                    }
                }
            }
            .rigth_content_bottom {
                img {
                    width: 260px;
                    height: 90px;
                }
            }
        }
    }
</style>
