import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})

Vue.use({
  vm
})
