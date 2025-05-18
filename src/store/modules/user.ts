// 创建用户相关的仓库
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
// 引入数据类型
import type { loginForm, LoginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由
import { constantRoute, asyncRoute, anyRoute } from '@/router/route.ts'
import router from '@/router'
//引入深拷贝
//@ts-ignore
import cloneDeep from 'lodash/cloneDeep'

// 过滤当前用户需要展示的异步路由
function filterAsyncRoute(asyncRoute: any, routes: any) {
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      return true
    }
  })
}
// 创建用户仓库
let useUserStore = defineStore('User', {
  //存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      userInfo: {}, //用户信息存储在缓存，但是不进行持久化操作
      menuRoutes: constantRoute //存储菜单数据
    }
  },
  //异步|逻辑
  actions: {
    //用户登录
    async userLogin(data: loginForm) {
      let result: LoginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.setToken(result.data)
        // 登录成功后立即获取用户信息（关键修改！）
        await this.getUserInfo()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //获取用户信息
    async getUserInfo() {
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.setUserInfo(result.data)
        let userRoute = filterAsyncRoute(cloneDeep(asyncRoute), result.data.routes)
        this.menuRoutes = [...constantRoute, ...anyRoute, ...userRoute]
        // 路由追加过滤得到的路由及任意路由
        // 同步添加路由（不再需要Promise.all）
        const addRoutesSync = (routes: any[]) => {
          routes.forEach((route) => {
            if (!router.hasRoute(route.name)) {
              router.addRoute(route)
              if (route.children) addRoutesSync(route.children)
            }
          })
        }
        addRoutesSync([...anyRoute, ...userRoute])
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    //退出登录
    async logout() {
      // 调用接口清除服务器端的token
      let result = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.userInfo = {}
        localStorage.removeItem('userInfo')
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    setToken(token: string) {
      this.token = token
      SET_TOKEN(token)
    },
    setUserInfo(userInfo: any) {
      delete userInfo.token
      delete userInfo.password
      this.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  getters: {}
})
export default useUserStore
