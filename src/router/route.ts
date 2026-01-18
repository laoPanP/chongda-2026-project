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
        name: 'home',
        meta: {
          title: '首页',
        },
      },
      {
        path: '/plan101',
        component: () => import('@/views/pages/plan101.vue'),
        name: 'plan101',
        meta: {
          title: '101计划',
        },
      },
      {
        path: '/virtualClassroom',
        component: () => import('@/views/pages/virtualClassroom.vue'),
        name: 'virtualClassroom',
        meta: {
          title: '虚拟教研室',
        },
      },
      {
        path: '/subjectCompetition',
        component: () => import('@/views/pages/subjectCompetition.vue'),
        name: 'subjectCompetition',
        meta: {
          title: '学科竞赛',
        },
      },
      {
        path: '/teachingSeminar',
        component: () => import('@/views/pages/teachingSeminar.vue'),
        name: 'teachingSeminar',
        meta: {
          title: '教学研讨会',
        },
      },
      {
        path: '/openSource',
        component: () => import('@/views/pages/openSource.vue'),
        name: 'openSource',
        meta: {
          title: '开源资源',
        },
      },
      {
        path: '/partners',
        component: () => import('@/views/pages/partners.vue'),
        name: 'partners',
        meta: {
          title: '合作伙伴',
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
