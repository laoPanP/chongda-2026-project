// 统一管理项目中用户相关的接口
import request from '../../utils/request'
import type { loginForm, loginResponseData, userInfoResponseData, loginOutResponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout'
}
// 暴露请求函数
// 登录接口
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, loginOutResponseData>(API.LOGOUT_URL)
