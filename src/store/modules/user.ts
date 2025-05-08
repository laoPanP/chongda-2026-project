// 创建用户相关的仓库
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData, userInfoResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由
import { constantRoute } from '@/router/route.ts'
// 创建用户仓库
let useUserStore = defineStore('User', {
  //存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : {},
      menuRoutes: constantRoute //存储菜单数据
    }
  },
  //异步|逻辑
  actions: {
    //用户登录
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        console.log(result.data)
        this.setToken(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息
    async getUserInfo() {
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.setUserInfo(result.data.checkUser)
        return 'ok'
      } else {
        return Promise.reject('请求用户信息失败')
      }
    },
    //退出登录
    logout() {
      // 目前没有接口清除服务器端的token
      this.token = ''
      this.userInfo = {}
      localStorage.removeItem('userInfo')
      REMOVE_TOKEN()
    },
    setToken(token: string) {
      this.token = token
      SET_TOKEN(token)
    },
    setUserInfo(userInfo: userInfoResponseData) {
      delete userInfo.token
      delete userInfo.password
      this.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  getters: {}
})
export default useUserStore
