// 底部榜单推荐
<template>
    <div class="contents_buttom">
        <div class="contents_left">
            <div class="content_top" v-for="item1 in listData.contentLeft" :key="item1.title">
                <div class="content_title">
                    <div class="bakgrod">{{item1.title}}</div>
                    <img src="../assets/images/all.png" alt="">
                </div>
                <div class="content_img" v-for="item2 in item1.top" :key="item2.img">
                    <div class="content_img_left">
                        <img :src="item2.img" alt="">
                    </div>
                    <div class="content_img_rigth">
                        <span>{{item2.text}}</span>
                        <a>{{item2.author}}</a>
                    </div>
                </div>
                <div class="content_title_bottom" v-for="(item3,index) in item1.bottom" :key="index">{{index+4}}<span>{{item3}}</span></div>
            </div>
        </div>
        <div class="contents_rigth">
            <div class="contents_rigth_tilte">
                <div>听歌推荐</div>
                <a href="">更多 ></a>
            </div>
            <div class="content_top">
                <img :src="listData.contentRigth.img" alt="">
                <span>{{listData.contentRigth.title}}</span>
                <a><i :class="[listData.contentRigth.label]=='1'?'iconfont icon-luyin':'iconfont icon-meitiwenjian'"></i>{{listData.contentRigth.sum}}</a>
            </div>
            <div class="content_bottom" v-for="item in listData.contentRigth.content" :key="item.img">
                <div class="content_bottom_left">
                    <img :src="item.img" alt="">
                </div>
                <div class="content_bottom_rigth">
                    <span>{{item.title}}</span>
                    <a><i :class="[item.label]=='1'?'iconfont icon-luyin':'iconfont icon-meitiwenjian'"></i>{{item.sum}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    listData: Object
  }
}
</script>

<style lang="scss" scoped>
    .contents_buttom {
        width: 1100px;
        height: 600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .contents_left {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .content_top {
                margin-right: 30px;
                &:nth-child(1) {
                    .bakgrod {
                        &::after {
                            background-color: #ff9d9d;
                        }
                    }
                }
                &:nth-child(2) {
                    .bakgrod {
                        &::after {
                            background-color: #f9c97b;
                        }
                    }
                }
                &:nth-child(3) {
                    .bakgrod {
                        &::after {
                            background-color: #91bced;
                        }
                    }
                }
                .content_title {
                    height: 30px;
                    display: flex;
                    justify-content: space-between;
                    div {
                        position: relative;
                        height: 22px;
                        font-size: 18px;
                        &::after {
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 12px;
                            bottom: 0;
                            left: 0;
                            z-index: -1;
                        }
                    }
                    img {
                        width: 40px;
                        height: 16px;
                        margin-top: 5px;
                    }
                }
                .content_img {
                    display: flex;
                    height: 65px;
                    background-color: #f9f9fa;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    &:hover {
                        span {
                            color: #f86442;
                        }
                        .content_img_left {
                            &::after {
                                content: '';
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: rgba($color: #fff, $alpha: .2)
                            }
                        }
                    }
                    .content_img_left {
                        position: relative;
                        width: 55px;
                        height: 55px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .content_img_rigth {
                        padding:0 10px;
                        margin-top: 30px;
                        span {
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            width: 180px;
                            display: block;
                            font-size: 13px;
                            font-weight: 500;
                        }
                        a {
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            width: 180px;
                            display: block;
                            font-size: 11px;
                        }
                    }
                }
                .content_title_bottom {
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    width: 240px;
                    display: block;
                    font-size: 13px;
                    height: 20px;
                    line-height: 20px;
                    margin: 15px 0;
                    color: #a3a3ac;
                    &:hover {
                        color: #f86442;
                        span {
                            color: #f86442;
                        }
                    }
                    span {
                        padding-left: 10px;
                        font-weight: 400;
                    }
                }
            }
        }
        .contents_rigth {
            width: 260px;
            .contents_rigth_tilte {
                height: 22px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 18px;
            }
            .content_top {
                height: 160px;
                background-color: #f5f6f6;
                img {
                    width: 100%;
                    height: 110px;
                    border-radius: 5px;
                }
                span {
                    padding: 0 5px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    width: 240px;
                    display: block;
                    height: 25px;
                    line-height: 25px;
                }
                a {
                    i {
                            padding-right: 10px;
                        }
                }
            }
            .content_bottom {
                display: flex;
                height: 55px;
                margin: 20px 0;
                .content_bottom_left {
                    width: 55px;
                    height: 55px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .content_bottom_rigth {
                    margin-left: 10px;
                    span {
                        margin-top: 5px;
                        padding: 0 5px;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        width: 180px;
                        display: block;
                        height: 25px;
                        line-height: 25px;
                        &:hover {
                            color: #f86442;
                        }
                    }
                    a {
                        i {
                            padding: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
