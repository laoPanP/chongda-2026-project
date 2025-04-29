import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化 配置中文（默认英文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
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
// 注册模板路由
app.use(router)
// 安装仓库
app.use(pinia)
// 引入模板全局样式
import '@/styles/index.scss'
//将应用挂载到挂载点上
app.mount('#app')
