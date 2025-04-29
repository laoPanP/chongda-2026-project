// 创建用户相关的仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData, userInfoResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 创建用户仓库
let useUserStore = defineStore('User', {
  //存储数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      userInfo: localStorage.getItem('userInfo') || {}
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
    setToken(token: string) {
      this.token = token
      SET_TOKEN(token)
    },
    setUserInfo(userInfo: userInfoResponseData) {
      this.userInfo = userInfo
      localStorage.setItem('userInfo', userInfo)
    }
  },
  getters: {}
})
export default useUserStore
