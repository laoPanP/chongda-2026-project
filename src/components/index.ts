import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

// 定义全局组件类型接口
interface GlobalComponents {
  [key: string]: Component
}

// 定义全局组件对象（使用类型断言和常量断言）
const components: GlobalComponents = {
  SvgIcon
} as const

// 导出安装器（带完整类型声明）
export default {
  install(app: App): void {
    // 使用 Object.entries 获取更严格的类型推断
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
  }
}