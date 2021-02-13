import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import articles from '../assets/posts/index'

Vue.use(VueRouter)

const routes = [
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
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog/Home.vue')
  },
  {
    path: '/music',
    name: 'Music',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Music" */ '../views/Music.vue')
  },
  ...articles.map(entry => ({
      path: `/${entry.file}`,
      name: entry.title,
      component: () => import(`../posts/${entry.file}`)
    }))
]

const router = new VueRouter({
  routes
})

export default router
