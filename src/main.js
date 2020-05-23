import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fastclick移动端延迟300毫秒
import Fastclick from 'fastclick'

//图片懒加载
import VueLazyload from 'vue-lazyload'

//1、引用自己封装的插件
import toast from './components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//2、安装插件
Vue.use(toast)

//安装图片懒加载的插件
Vue.use(VueLazyload,{
	loading:require('./assets/img/common/placeholder.png')
})

//解决移动端的300延迟
Fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')