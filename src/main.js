import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 全局默认样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// ui库按需导入
import './utils/ele'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
