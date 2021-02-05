// 分类内容
<template>
    <div class="contents">
        <div class="content" v-for="item1 in contents" :key="item1.classify">
            <div class="content_left">
                <div class="content_content_top">
                    <div class="content_top">{{item1.classify}}</div>
                    <div class="content_tilte" v-for="(item2, index) in item1.title" :key="index">{{item2}}</div>
                    <div>更多</div>
                </div>
                <div class="content_content_bottom">
                    <div v-for="item3 in item1.content" :key="item3.img" class="content_item">
                        <div class="content_img">
                            <img class="zhutu" :src="item3.img" alt="">
                            <div class="content_title"><i class="iconfont icon-erji"></i>{{item3.sum}}</div>
                            <img class="bofang" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA/FBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5g2j+6eT5jHL6k3v+9PH+7ur9yb37o4//+ff+5N790Mb7s6L6moT5hWr//Pv+7Of93dX7qJT5h27+8O38wbP8uar7rJr8vK36non939j6oIuNLd5VAAAAOHRSTlMABo2JSPAE/NTE89vRIgjuzMjmv6ihSxr1TkRCPR4XDbiRj1Lou7SrJNmFbiquaVZ1Wy4U4pmANT4TenoAAAPzSURBVHja1duHehJBFAXgu4WFpUivAULHmJjEfhCCqElM0Wj0/d/FEv0msgiz0xb/Jziwd+bOzsySkExl3x4XE4VsEkhmC4ni2N6vZMiI6lHXT2KlpN87qpJOD9zuHjbY67kWaWFVyjFwiZUr6jM8dAYIYdA9IJWaI4Tm10mVfhpCcmoiuDkIy7nyz34EKcMDuXFnxyEp7jwgYY0UFEjtiP58Jw41Xgj9CU8TUCYtUAlPklCo9oTC8XpQzPYoBKsE5R6HKITdDjQo7hKndg5a5NrEJZOCJqkMcXi2B21SbY7nn4NG6Y11YA2hVdGitbwxNHvs0To9aOesnX9hQH1N/6nBgGzrn/03DSPyFq3WhQz5MmjAmObKB5CCMQmLgmwYdEwBB3EYVAuOhA6MGtMSF4Ytr9XzMMynv/QhRX4opmFcR3gOujy9nd3ezCHrldgQmN9Ofjk/PYGcx/fewcHtYjr5Y/oectgS1QGvD7PJPd9eQ8Yj+s0agNebyV/OP32AuIFFd+rgdjZZMruEOJfulMHr7SRIohjLv/twDLzmE0ZBMcassG3g9WSlxQXENMKsxFiAoGvBYrTppxSYkAGYs3cQkKAfqmDCB2BO3yK8KhEdgREIwMwEirEfKAGBAMzVRzDcReCDEQvAXL9BOD6RlwQTMoB8McZYJ5QLwJzfhCrGFmsEwgGk2oNL+2DkAjCfT8DrkGwoC8BMuYvRobHKAMyCc0SWqKg0ADPlGw5FSqgNwEzn4JCmguIAzBU4FCimOgAzx2ZZqukLwDMUahTXF+ALNotHHyDyR6CxCD/yFKHGYfgZHJ7rm4iu+SYifVPxV/AYamtGc3ApRd+OI1+QVABEuiTLgIlkUcpmokiW5VvwYkI9MOZfzbbh5TTS1/M2/bAHxvwGRaAIjG7ROFFuUrFTCysGXheqt+lCb1SeK92ofEF3KuC2CIy9rxDXoDteAbwulyb+L0o2q8kBt4XK7XqRA4uTmY4DCxqB28kVW3XIGRGzgxDe3SzOrj5dQFaT7snBuDzdV4dxlYiPbvPbdnhNIxhVomUP4zAoWaUABwYdb+MlFtqBKfGmrptsobpQkBX1VS46SMKAbJX+qQ8D6rSGDe0e0TpeCZqVPFrL6kCroRXttd7c7vZfbNZ6tbtFXJ7loUWuHe31/uHu//OBA5HnQLFHHoXTGEChbIVCq/pQJp8hAd7LONToWiSmmYAC6SYJ8/aTkFR7aZGMahlSRi2SteNLFN8OqdDsQEi+Qqo8LccR1rBOKrWOnyOEgpMh1TyX98PnbNn1SAurYSewQcJuWKRTu2/7MawU8+1+m4zIuIdOqZj+8/l/ulhyDl2xEf8dLVX8/WrSz1AAAAAASUVORK5CYII=" />
                        </div>
                        <span>{{item3.title}}</span>
                        <a>{{item3.author}}</a>
                    </div>
                </div>
            </div>
            <div class="content_rigth">
                <div class="rigth_content_top">
                    {{item1.list}}
                </div>
                <div class="rigth_content_bottom">
                    <div v-for="item4 in item1.content_rigth" :key="item4.img" class="itenFor">
                        <div class="content_left">
                            <img class="img" :src="item4.img" alt="">
                            <img class="smallbofang" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA/FBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5g2j+6eT5jHL6k3v+9PH+7ur9yb37o4//+ff+5N790Mb7s6L6moT5hWr//Pv+7Of93dX7qJT5h27+8O38wbP8uar7rJr8vK36non939j6oIuNLd5VAAAAOHRSTlMABo2JSPAE/NTE89vRIgjuzMjmv6ihSxr1TkRCPR4XDbiRj1Lou7SrJNmFbiquaVZ1Wy4U4pmANT4TenoAAAPzSURBVHja1duHehJBFAXgu4WFpUivAULHmJjEfhCCqElM0Wj0/d/FEv0msgiz0xb/Jziwd+bOzsySkExl3x4XE4VsEkhmC4ni2N6vZMiI6lHXT2KlpN87qpJOD9zuHjbY67kWaWFVyjFwiZUr6jM8dAYIYdA9IJWaI4Tm10mVfhpCcmoiuDkIy7nyz34EKcMDuXFnxyEp7jwgYY0UFEjtiP58Jw41Xgj9CU8TUCYtUAlPklCo9oTC8XpQzPYoBKsE5R6HKITdDjQo7hKndg5a5NrEJZOCJqkMcXi2B21SbY7nn4NG6Y11YA2hVdGitbwxNHvs0To9aOesnX9hQH1N/6nBgGzrn/03DSPyFq3WhQz5MmjAmObKB5CCMQmLgmwYdEwBB3EYVAuOhA6MGtMSF4Ytr9XzMMynv/QhRX4opmFcR3gOujy9nd3ezCHrldgQmN9Ofjk/PYGcx/fewcHtYjr5Y/oectgS1QGvD7PJPd9eQ8Yj+s0agNebyV/OP32AuIFFd+rgdjZZMruEOJfulMHr7SRIohjLv/twDLzmE0ZBMcassG3g9WSlxQXENMKsxFiAoGvBYrTppxSYkAGYs3cQkKAfqmDCB2BO3yK8KhEdgREIwMwEirEfKAGBAMzVRzDcReCDEQvAXL9BOD6RlwQTMoB8McZYJ5QLwJzfhCrGFmsEwgGk2oNL+2DkAjCfT8DrkGwoC8BMuYvRobHKAMyCc0SWqKg0ADPlGw5FSqgNwEzn4JCmguIAzBU4FCimOgAzx2ZZqukLwDMUahTXF+ALNotHHyDyR6CxCD/yFKHGYfgZHJ7rm4iu+SYifVPxV/AYamtGc3ApRd+OI1+QVABEuiTLgIlkUcpmokiW5VvwYkI9MOZfzbbh5TTS1/M2/bAHxvwGRaAIjG7ROFFuUrFTCysGXheqt+lCb1SeK92ofEF3KuC2CIy9rxDXoDteAbwulyb+L0o2q8kBt4XK7XqRA4uTmY4DCxqB28kVW3XIGRGzgxDe3SzOrj5dQFaT7snBuDzdV4dxlYiPbvPbdnhNIxhVomUP4zAoWaUABwYdb+MlFtqBKfGmrptsobpQkBX1VS46SMKAbJX+qQ8D6rSGDe0e0TpeCZqVPFrL6kCroRXttd7c7vZfbNZ6tbtFXJ7loUWuHe31/uHu//OBA5HnQLFHHoXTGEChbIVCq/pQJp8hAd7LONToWiSmmYAC6SYJ8/aTkFR7aZGMahlSRi2SteNLFN8OqdDsQEi+Qqo8LccR1rBOKrWOnyOEgpMh1TyX98PnbNn1SAurYSewQcJuWKRTu2/7MawU8+1+m4zIuIdOqZj+8/l/ulhyDl2xEf8dLVX8/WrSz1AAAAAASUVORK5CYII=" />
                        </div>
                        <div class="disc"></div>
                        <div class="content_rigth">
                            <span>{{item4.title}}</span>
                            <a href="">{{item4.author}}</a>
                        </div>
                    </div>
                </div>
                <div class="bottom_title">4<span>{{item1.text[0]}}</span></div>
                <div class="bottom_title">5<span>{{item1.text[1]}}</span></div>
                <div class="bottom_title">6<span>{{item1.text[2]}}</span></div>
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
    console.log(this.contents)
  },
  props: {
    contents: Array
  }
}
</script>

<style lang="scss" scoped>
    .contents{
        width: 1100px;
        height: 430px;
        margin: 0 auto;
        margin-top: 40px;
        .content {
            margin-bottom: 60px;
            display: flex;
            .content_left {
                display: flex;
                flex-direction: column;
                .content_content_top {
                    display: flex;
                    justify-content: flex-start;
                    margin: 0 14px;
                    height: 45px;
                    position: relative;
                    .content_top {
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
                    .content_tilte {
                        color: #40404c;
                        font-size: 14px;
                        margin-top: 4px;
                        padding: 0 10px;
                        &:hover {
                            color: #f86442;
                        }
                    }
                    div{
                        &:last-of-type {
                            color: #72727b;
                            position: absolute;
                            right: 10px;
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
                .content_content_bottom {
                    display: flex;
                    height: 200px;
                    flex-wrap: wrap;
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
                            display: block;
                            &:hover {
                                color: #f86442;
                            }
                        }
                    }
                }
            }
            .content_rigth {
                width: 260px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .rigth_content_top {
                    font-size: 18px;
                    padding-bottom: 22px;
                }
                .rigth_content_bottom {
                    display: flex;
                    flex-direction: column;
                    .itenFor{
                        display: flex;
                        width: 260px;
                        justify-content: space-between;
                        margin-bottom: 12px;
                        position: relative;
                        .content_left {
                            width: 75px;
                            height: 75px;
                            border-radius: 10px;
                            overflow: hidden;
                            position: relative;
                            z-index: 11;
                            .img {
                                width: 100%;
                                height: 100%;
                            }
                            .smallbofang {
                                width: 30px;
                                height: 30px;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%,-50%) scale(0);
                                z-index: 10;
                                transition: .3s;
                            }
                        }
                        .disc {
                            display: inline-block;
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            background: -webkit-linear-gradient(top,#545454,#000000);
                            position: absolute;
                            left: 28px;
                            top: 50%;
                            transform: translateY(-50%);
                            z-index: 10;
                        }
                        .content_rigth {
                            *{
                                height: 50%;
                            }
                            width: 160px;
                            span {
                                line-height: 50px;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow:ellipsis;
                                width: 160px;
                                display: block;
                            }
                            a {
                                line-height: 20px;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow:ellipsis;
                                width: 160px;
                                display: block;
                            }
                        }
                        &:hover {
                            span {
                                color: #f86442;
                            }
                            .smallbofang {
                                transform: translate(-50%,-50%) scale(1.2);
                            }
                        }
                    }
                }
                .bottom_title {
                    color: #b7a3ac;
                    display: inline-block;
                    margin-top: 20px;
                    span {
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        width: 200px;
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 10px;
                        height: 20px;
                    }
                    &:hover {
                        color: #f86442;
                        span {
                            color: #f86442;
                        }
                    }
                }
            }
        }
    }
</style>
