import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: "root" */ '../layouts/MainLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About')
      },
      {
        path: 'services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/Services'),
        hash: '#services',
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact'),
        hash: '#contact',
      },
      {
        path: 'testimonials',
        name: 'testimonials',
        component: () => import(/* webpackChunkName: "test" */ '../views/Testimonials'),
        hash: '#testimonials',
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        selector: to.hash
      };
    }
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 }
  }
})

export default router
