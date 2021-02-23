import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import errorPage from '../views/HTTP/httpError.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: errorPage,
    props: {
      errorCode: '404',
      errorMessage: 'Esta página não existe',
      errorLinkMessage: 'acesse novamente a pagina inicial'
    }
  },
  {
    path: '/500',
    component: errorPage,
    props: {
      errorCode: '500',
      errorMessage: 'Algo não funcionou como deveria...',
      errorLinkMessage: 'Deve ser algum erro no servidor'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/ideias',
    name: 'Ideias',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ideias.vue'),
    children: [
      {
        path: '/animals',
        name: 'Animals',
        component: () => import(/* webpackChunkName: "about" */ '../components/Animals.vue')
      },
      {
        path: '/culture',
        name: 'Culture',
        component: () => import(/* webpackChunkName: "about" */ '../components/Culture.vue')
      },
      {
        path: '/education',
        name: 'Education',
        component: () => import(/* webpackChunkName: "about" */ '../components/Education.vue')
      },
      {
        path: '/entrepreneurship',
        name: 'Entrepreneurship',
        component: () => import(/* webpackChunkName: "about" */ '../components/Entrepreneurship.vue')
      },
      {
        path: '/environment',
        name: 'Environment',
        component: () => import(/* webpackChunkName: "about" */ '../components/Environment.vue')
      },
      {
        path: '/health',
        name: 'Health',
        component: () => import(/* webpackChunkName: "about" */ '../components/Health.vue')
      },
      {
        path: '/publicSecurity',
        name: 'PublicSecurity',
        component: () => import(/* webpackChunkName: "about" */ '../components/PublicSecurity.vue')
      },
      {
        path: '/smartcities',
        name: 'SmartCities',
        component: () => import(/* webpackChunkName: "about" */ '../components/SmartCities.vue')
      },
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
