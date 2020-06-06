import Vue from 'vue'
import VueRouter from 'vue-router'

// RouterTab
import { RouterTabRoutes } from 'vue-router-tab'

//
import Frame from '../components/layout/Frame.vue'

//
const importPage = view => () =>
  import(/* webpackChunkName: "p-[request]" */ `../views/${view}.vue`)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Frame,
    children: [
      // RouterTab iframe
      ...RouterTabRoutes,
      {
        path: '/',
        name: 'Home',
        component: importPage('Home'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: importPage('About'),
        meta: {
          title: 'About'
        }
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: importPage('SignIn'),
        meta: {
          title: 'SignIn'
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: importPage('Register'),
        meta: {
          title: 'Register'
        }
      },
      {
        path: '/logout',
        name: 'Logout',
        component: importPage('Logout'),
        meta: {
          title: 'Logout'
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: importPage('Profile'),
        meta: {
          title: 'Profile'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
