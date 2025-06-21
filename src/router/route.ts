// 常量路由（任意角色可以访问）
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '', //菜单标题
      hidden: false, //是否隐藏
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页', //菜单标题
          hidden: false,
          icon: 'Avatar',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录', //菜单标题
      hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404', //菜单标题
      hidden: true,
    },
  },
]
export const asyncRoute = []
//任意路由 重定向到404
export const anyRoute = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由', //菜单标题
      hidden: true,
    },
  },
]
// 路由白名单
export const whiteList = []
