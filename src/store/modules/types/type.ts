// 定义各个单独仓库的数据state类型
import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  userInfo: any
  menuRoutes: RouteRecordRaw[]
}
