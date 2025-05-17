//路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import setting from './setting'
//引入操作本地存储的工具方法
import { REMOVE_TOKEN } from '@/utils/token'
import { ElMessageBox } from 'element-plus'
//引入进度条样式
import 'nprogress/nprogress.css'
// 获取用户仓库token
import pinia from '@/store'
import useUserStore from '@/store/modules/user'
import { whiteList } from '@/router/route.ts'
// 引入清除动态路由的方法
import { hasPermission } from '@/utils/clearRoute/clearRoute'
// 取消顶部进度条左侧加载
nprogress.configure({
  showSpinner: false
})
let userStore = useUserStore(pinia)

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  // 访问路由前触发
  // to:要访问的路由
  // from: 当前访问的路由
  // next：路由放行函数
  document.title = `${setting.title} - ${to.meta.title}`
  nprogress.start()

  const token = userStore.token

  // 1. 白名单直接放行
  if (whiteList.includes(to.path)) {
    return next()
  }

  // 2. 未登录处理
  if (!token) {
    return to.path === '/login' ? next() : next(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }

  // 3. 已登录状态处理
  try {
    // 3.1 确保权限已加载
    if (!userStore.userInfo.username || !userStore.menuRoutes.length) {
      await userStore.getUserInfo()
    }
    // 3.2 登录后访问/login则跳首页
    if (to.path === '/login') {
      return next('/')
    }
    // 3.3 权限校验
    if (!hasPermission(to.name, userStore.menuRoutes)) {
      await ElMessageBox.confirm('您没有访问该页面的权限', '温馨提示', {
        confirmButtonText: '返回首页',
        showCancelButton: false, // 隐藏取消按钮
        type: 'warning'
      })
      return next('/') // 强制跳转
    }
    // 3.4 正常放行
    next()
  } catch (error) {
    // 清除无效token
    await userStore.logout()
    next(`/login?redirect=${to.path}`)
  }
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
