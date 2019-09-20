import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import store from './store/index'

axios.defaults.baseURL = 'http://149.129.59.121:7788/api';
axios.defaults.timeout = 5000 // 请求超时
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.withCredentials = true 
  // api 即上面 vue.config.js 中配置的地址

// Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
