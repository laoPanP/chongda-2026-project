import router from '@/router'
import { constantRoute } from '@/router/route.ts'

// 重置路由（只保留常量路由）
export function resetRouter() {
  router.getRoutes().forEach((route: any) => {
    const name = route.name
    if (name && !constantRoute.some((cRoute: any) => cRoute.name === name)) {
      router.removeRoute(name)
    }
  })
}
/**
 * 检查是否有权限访问目标路由（支持嵌套路由）
 * @param routeName 当前路由名称
 * @param menuRoutes 用户菜单路由树（完整嵌套结构）
 */
export function hasPermission(routeName: string | symbol | undefined, menuRoutes: any[]): boolean {
  if (!routeName) {
    if (import.meta.env.DEV) {
      console.warn('未命名路由:', router.currentRoute.value.path)
    }
    return true // 未命名路由默认放行（根据需求调整）
  }

  // 递归检查路由树
  const checkRouteTree = (routes: any[]): boolean => {
    return routes.some((route) => {
      // 检查当前路由是否匹配
      if (String(route.name) === String(routeName)) return true
      // 递归检查子路由
      if (route.children) return checkRouteTree(route.children)
      return false
    })
  }

  return checkRouteTree(menuRoutes)
}
