//登录接口需要携带的参数ts类型
export interface loginForm {
  username: string
  password: string
}
//登录接口返回的数据类型
export interface LoginResponseData {
  code: number
  data: string
  message: string
}

// 服务器返回用户信息的相关数据类型
export interface userInfo {
  userId: number
  avatar: string
  username: string
  password?: string
  desc: string
  roles: string[]
  roleCodes?: string[]
  buttons: string[]
  routes: string[]
  token?: string
  createTime?: string
  updateTime?: string
}
export interface UserInfoResponseData {
  code: number
  data: userInfo
  message: string
}
//退出登录返回的想关数据类型
export interface LoginOutResponseData {
  code: number
  data: string
  message: string
}
//用户列表入参查询类型
export interface queryData {
  pageNo: number
  pageSize: number
  username?: string
}
//用户新增、修改入参类型
export interface UserAddParams {
  username: string
  userId?: number
  password: string
  desc: string
}
//角色分配传入类型
export interface UserAllocationParams {
  userId: number
  roleCodes: string[]
  roles: string[]
  username?: string
}
//角色列表入参查询类型
export interface QueryRoleData {
  pageNo: number
  pageSize: number
  roleName?: string
  roleCode?: string
  roleCodes?: string
}
// 角色数据基础类型
export interface RoleDataTS {
  roleId?: number
  roleCode: string
  roleName: string
  description?: string
  createTime?: string
  updateTime?: string
}
