// 常量路由（任意角色可以访问）
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home', // 默认一进入就重定向到home页面
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home', // 'home' 对应 '大会日程'
        meta: {
          title: '大会日程',
        },
      },
      {
        path: '/steering',
        component: () => import('@/views/pages/steering.vue'),
        name: 'steering',
        meta: {
          title: '指导委员会',
        },
      },
      {
        path: '/executive',
        component: () => import('@/views/pages/executive.vue'),
        name: 'executive',
        meta: {
          title: '执行委员会',
        },
      },
      {
        path: '/guide',
        component: () => import('@/views/pages/guide.vue'),
        name: 'guide',
        meta: {
          title: '参会指南',
        },
      },
      {
        path: '/partners',
        component: () => import('@/views/pages/partners.vue'),
        name: 'partners',
        meta: {
          title: '合作单位',
        },
      },
      {
        path: '/media',
        component: () => import('@/views/pages/media.vue'),
        name: 'media',
        meta: {
          title: '大会报道',
        },
      },
      {
        path: '/meetingSchedule',
        component: () => import('@/views/pages/meetingSchedule.vue'),
        name: 'meetingSchedule',
        meta: {
          title: '会议日程',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
export const asyncRoute = []
//任意路由 重定向到404
export const anyRoute = []
// 路由白名单
export const whiteList = []
