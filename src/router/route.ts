// 常量路由
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '', //菜单标题
      hidden: false, //是否隐藏
      icon: ''
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
          icon: 'Avatar'
        }
      }
    ]
  },
  {
    path: '/viewDataScreen',
    component: () => import('@/views/viewDateScreen/viewDateScreen.vue'),
    name: 'viewDataScreen',
    meta: {
      title: '数据大屏', //菜单标题
      hidden: false,
      icon: 'Monitor'
    }
  },
  {
    path: '/authManage',
    component: () => import('@/layout/index.vue'),
    name: 'authManage',
    meta: {
      title: '权限管理', //菜单标题
      hidden: false, //是否隐藏
      icon: 'Lock'
    },
    redirect: '/authManage/userManage',
    children: [
      {
        path: '/authManage/userManage',
        component: () => import('@/views/authManage/userManage/userManage.vue'),
        name: 'userManage',
        meta: {
          title: '用户管理', //菜单标题
          hidden: false,
          icon: 'User'
        }
      },
      {
        path: '/authManage/roleManage',
        component: () => import('@/views/authManage/roleManage/roleManage.vue'),
        name: 'roleManage',
        meta: {
          title: '角色管理', //菜单标题
          hidden: false,
          icon: 'UserFilled'
        }
      },
      {
        path: '/authManage/menuManage',
        component: () => import('@/views/authManage/menuManage/menuManage.vue'),
        name: 'menuManage',
        meta: {
          title: '菜单管理', //菜单标题
          hidden: false,
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/commodityManage',
    component: () => import('@/layout/index.vue'),
    name: 'commodityManage',
    meta: {
      title: '商品管理', //菜单标题
      hidden: false, //是否隐藏
      icon: 'Goods'
    },
    redirect: '/commodityManage/brandManage',
    children: [
      {
        path: '/commodityManage/brandManage',
        component: () => import('@/views/commodityManage/brandManage/brandManage.vue'),
        name: 'brandManage',
        meta: {
          title: '品牌管理', //菜单标题
          hidden: false,
          icon: 'ShoppingCart'
        }
      },
      {
        path: '/commodityManage/attrManage',
        component: () => import('@/views/commodityManage/attrManage/attrManage.vue'),
        name: 'attrManage',
        meta: {
          title: '属性管理', //菜单标题
          hidden: false,
          icon: 'Message'
        }
      },
      {
        path: '/commodityManage/spuManage',
        component: () => import('@/views/commodityManage/spuManage/spuManage.vue'),
        name: 'spuManage',
        meta: {
          title: 'SPU管理', //菜单标题
          hidden: false,
          icon: 'Grid'
        }
      },
      {
        path: '/commodityManage/skuManage',
        component: () => import('@/views/commodityManage/skuManage/skuManage.vue'),
        name: 'skuManage',
        meta: {
          title: 'SKU管理', //菜单标题
          hidden: false,
          icon: 'Histogram'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录', //菜单标题
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404', //菜单标题
      hidden: true
    }
  },
  //任意路由，重定向到404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由', //菜单标题
      hidden: true
    }
  }
]
