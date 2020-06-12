import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      
      path: '/',
      redirect: 'List',
      component: DashboardLayout,
      children: [
        {
          path: '/template',
          name: 'template',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/template.vue')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import(/* webpackChunkName: "demo" */ './views/setting.vue')
        },
      
        {
          path: '/List',
          name: 'List',
          component: () => import(/* webpackChunkName: "demo" */ './views/List.vue')
        }
      ]
    },
    
  ]
})
