// 统一管理项目中用户相关的接口
import request from '../../utils/request'
import type {
  loginForm,
  loginResponseData,
  userInfoResponseData,
  loginOutResponseData,
  queryData,
  UserAddParams,
  UserAllocationParams
} from './type'
import type { PaginationResponseData, CommonResponse } from '../commonType'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
  // 获取用户信息接口
  USER_LIST = '/user/list',
  USER_DELETE = '/user/batchDelete',
  USER_ADD = '/user/add',
  USER_UPDATE = '/user/update',
  USER_ALLOCATION = '/user/allocation'
}
// 暴露请求函数
// 登录接口
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, loginOutResponseData>(API.LOGOUT_URL)
// 用户列表查询
export const reqUserList = (params: queryData) =>
  request.get<queryData, PaginationResponseData>(API.USER_LIST, { params })
// 用户删除-支持批量
export const reqDeleteUser = (data: any) => request.post<any, CommonResponse>(API.USER_DELETE, data)
// 新增用户
export const reqAddUser = (data: UserAddParams) => request.post<UserAddParams, CommonResponse>(API.USER_ADD, data)
// 修改品牌
export const reqUpdateUser = (userId: number, data: UserAddParams) =>
  request.put<UserAddParams, CommonResponse>(`${API.USER_UPDATE}/${userId}`, data)
// 用户分配确认
export const reqAllocationUser = (userId: number, data: UserAllocationParams) =>
  request.put<UserAllocationParams, CommonResponse>(`${API.USER_ALLOCATION}/${userId}`, data)
