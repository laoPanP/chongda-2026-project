// 常量路由
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login'
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  //任意路由，重定向到404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
]
