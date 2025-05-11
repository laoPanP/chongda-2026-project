//登录接口需要携带的参数ts类型
export interface loginForm {
  username: string
  password: string
}
//登录接口返回的数据类型
export interface loginResponseData {
  code: number
  data: string
  message: string
}

// 服务器返回用户信息的相关数据类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password?: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string
  token?: string
}
export interface userInfoResponseData {
  code: number
  data: userInfo
  message: string
}
//退出登录返回的想关数据类型
export interface loginOutResponseData {
  code: number
  data: string
  message: string
}
