//路由鉴权
import router from '@/router'
import nprogress from 'nprogress'
import setting from './setting'
//引入操作本地存储的工具方法
import { REMOVE_TOKEN } from '@/utils/token'
//引入进度条样式
import 'nprogress/nprogress.css'
// 获取用户仓库token
import pinia from '@/store'
import useUserStore from '@/store/modules/user'
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
  document.title = setting.title + ' - ' + to.meta.title
  nprogress.start()
  let token = userStore.token
  let userName = userStore.userInfo.username
  if (token) {
    //用户登录
    if (to.path === '/login') {
      next('/')
    } else {
      // 有用户信息继续访问放行，没有就先获取用户信息
      if (userName) {
        next()
      } else {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          //token过期 | 用户手动修改本地token
          try {
            // 1.清除token
            await userStore.logout()
          } catch (logoutError) {
          } finally {
            //防止登录失败接口也报错时，因为无法继续往后执行，造成一直重复调用接口，无法跳转页面
            // 强制清除本地 token 和用户信息
            userStore.token = ''
            userStore.userInfo = {}
            REMOVE_TOKEN()
            localStorage.removeItem('userInfo')
            next({
              path: '/login',
              query: { redirect: to.path }
            })
          }
        }
      }
    }
  } else {
    //用户未登录
    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.path }
      })
    }
  }
  next()
})
//全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
