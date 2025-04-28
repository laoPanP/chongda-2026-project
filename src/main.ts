import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化 配置中文（默认英文）
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
console.log(import.meta.env)
//将应用挂载到挂载点上
app.mount('#app')
