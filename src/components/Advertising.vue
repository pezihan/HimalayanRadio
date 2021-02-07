<template>
    <div class="contents">
        <div class="content_one">
            <div><img src="data:image/png;base64,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" alt=""></div>
            <div>
                <span>开放平台</span>
                <a>对接海量精彩内容</a>
            </div>
        </div>
        <div class="content_one">
            <div><img src="https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/yunjianji2_decff42.png" alt=""></div>
            <div>
                <span>云剪辑</span>
                <a>在线音频剪辑神器</a>
            </div>
        </div>
        <div class="content_one">
            <div><img src="https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/ximadaxue_8052375.jpg" alt=""></div>
            <div>
                <span>喜马拉雅大学</span>
                <a>主播梦想孵化基地</a>
            </div>
        </div>
        <div class="content_one">
            <div><img src="https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/xiaoyaai_9944029.png" alt=""></div>
            <div>
                <span>小雅智能</span>
                <a>智能硬件，连接赋能</a>
            </div>
        </div>
        <div class="content_one">
            <div><img src="https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/chezai_06ee782.png" alt=""></div>
            <div>
                <span>车联网平台</span>
                <a>自在出行，听我想听</a>
            </div>
        </div>
        <div class="content_one">
            <div><img src="https://s1.xmcdn.com/yx/ximalaya-web-static/last/dist/images/qingxuetang_5553ef8.png" alt=""></div>
            <div>
                <span>企业版</span>
                <a>员工学习，企业买单</a>
            </div>
        </div>
        <div class="content_two">
            <div>
                手机端
                <i class="iconfont icon-zhuti"></i>
            </div>
            <div>
                电脑端
                <i class="iconfont icon-xiazai1"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contents {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        height: 100px;
        justify-content: space-around;
        border-bottom: 1px solid #e8e8e8;
        .content_one {
            display: flex;
            flex-direction: column;
            align-items: center;
            div {
                &:nth-child(1) {
                    width: 40px;
                    height: 40px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                &:nth-child(2) {
                    span {
                        margin-top: 10px;
                        display: block;
                        text-align: center;
                    }
                    a {
                        font-size: 10px;
                    }
                }
            }
        }
        .content_two {
            width: 130px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            div {
                width: 110px;
                height: 28px;
                background: -webkit-linear-gradient(top,#fa2801,#fe5d3b);
                border-radius: 15px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                line-height: 28px;
            }
            i {
                padding: 0 5px;
            }
        }
    }
</style>
