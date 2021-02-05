<template>
    <div class="navter">
        <div class="nav_head">
            <div class="head_one">
              <i class="iconfont icon-tubiaozhizuomoban_daoshipai"></i>
              全部分类
            </div>
            <div class="head_two">
              <span>排行榜</span>
              <div>-</div>
              <span>广播</span>
            </div>
        </div>
        <div v-for="item1 in navData" :key="item1.tilte" class="nav_content">
            <div><span>{{ item1.tilte }}</span></div>
            <div>
                <a v-for="(item2, index) in item1.nav1" :key="index">{{item2}}</a>
            </div>
            <div>
                <a v-for="(item3, index) in item1.nav2" :key="index">{{item3}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      navData: [
        {
          tilte: '有声书',
          nav1: ['文学', '言情', '商业'],
          nav2: ['悬疑', '武侠', '历史小说']
        },
        {
          tilte: '音乐',
          nav1: ['相声', '评书', '小品'],
          nav2: ['流行', '民谣', '轻音乐']
        },
        {
          tilte: '教育',
          nav1: ['英语', '历史', '人文'],
          nav2: ['两会', '科技', '外文原版']
        },
        {
          tilte: '儿童',
          nav1: ['学前英语', '科普', '绘本'],
          nav2: ['少儿音乐', '文学', '卡通']
        },
        {
          tilte: '知识',
          nav1: ['财经', 'IT科技', '新媒体'],
          nav2: ['创业']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .navter {
        margin: 40px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1100px;
        height: 80px;
        .nav_head {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            .head_one {
                .iconfont {
                    font-size: 25px;
                    vertical-align: middle;
                }
                &:hover {
                    color: #f86442;
                }
            }
            .head_two {
                div {
                    display: inline-block;
                    border-right: 1px solid #e8e8e8;
                    height: 3px;
                }
                span {
                    font-weight: 400;
                    padding: 5px;
                }
            }
        }
        .nav_content {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            div {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                &:first-child {
                    span {
                        position: relative;
                        display: inline-block;
                        &::before {
                            content: '';
                            display: inline-block;
                            position: absolute;
                            width: 15px;
                            height: 3px;
                            background-color: #a392ec;
                            bottom: 4px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                }
                a {
                    font-weight: 400;
                    padding:0 6px;
                    display: inline-block;
                    overflow: hidden;
                    border-right: 1px solid #e8e8e8;
                    &:last-child {
                        padding-right: 0;
                        border: none;
                    }
                    &:first-child {
                        padding-left: 0;
                    }
                }
            }
        }
    }
    a:hover {
        color: #f86442;
    }
    span:hover {
        color: #f86442;
    }

</style>
