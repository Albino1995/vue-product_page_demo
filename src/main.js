import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import Analysis from './pages/detail/analysis'
import Count from './pages/detail/count'
import Forecast from './pages/detail/forecast'
import Publish from './pages/detail/Publish'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/',
      children: [
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
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
