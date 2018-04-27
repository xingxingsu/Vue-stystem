import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
Vue.use(Router)

export default new Router({
  routes: [{
    name:'Login',
    path:'/login',
    component:Login
  }]
})
