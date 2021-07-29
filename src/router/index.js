import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '@/views/authenication/SignIn.vue'
import SignUp from '@/views/authenication/SignUp.vue'
import ProductionList from '@/views/page/ProductionList.vue'
import PageLayout from '@/layouts/page/Index.vue'
import Authenication from '@/layouts/authenication/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layouts/default/Index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/gridlistpage',
        name: 'gridlistpage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/GridListPage.vue')
      },
      {
        path: '/breakpoints',
        name: 'breakpoints',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/BreakPoints.vue')
      },
      {
        path: '/Typography',
        name: 'Typography',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Typography.vue')
      },
      {
        path: '/buttons',
        name: 'buttons',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Buttons.vue')
      }
    ]
  },
  {
    path: '/Authenication',
    name: 'Authenication',
    component: Authenication,
    children: [
      {
        path: '/signIn',
        name: 'signIn',
        component: SignIn
      },
      {
        path: '/signUp',
        name: 'signUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/page',
    name: 'PageLayout',
    component: PageLayout,
    children: [
      {
        path: '/productionlist',
        name: 'productionlist',
        component: ProductionList
      }
    ]

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
