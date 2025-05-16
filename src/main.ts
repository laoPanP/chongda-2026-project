import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化 配置中文（默认英文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//主题暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css'

// 引入路由
import router from './router'
// 引入仓库
import pinia from './store'
// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目的全局组件
import GlobalComponents from './components'
app.use(GlobalComponents)
// 注册所有element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册模板路由
app.use(router)
// 安装仓库
app.use(pinia)
// 引入模板全局样式
import '@/styles/index.scss'
// 引入路由鉴权文件
import '@/premisstion.ts'
//将应用挂载到挂载点上
app.mount('#app')
