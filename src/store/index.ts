// 主仓库
import { createPinia } from 'pinia'
// import persistPlugin from './persistPlugin'
import persistPlugin from 'pinia-persist-plugin-pxx'

// 创建仓库
let pinia = createPinia()
// 使用 bind 传递选项
// pinia.use((context) =>
//   persistPlugin(context, {
//     key: 'APP_',
//     stores: ['User', 'settingStore']
//   })
// )
// 改为使用自己写的插件
pinia.use(
  persistPlugin({
    key: 'CUSTOM_',
    stores: ['User', 'settingStore']
  })
)
export default pinia
