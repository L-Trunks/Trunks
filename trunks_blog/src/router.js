import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Navigator from './views/Navigator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Navigator',
          component: Navigator,
        }
      ]
    }
  ]
})
