// 主仓库
import { createPinia } from 'pinia'
import persistPlugin from './persistPlugin'

// 创建仓库
let pinia = createPinia()
// 使用 bind 传递选项
pinia.use((context) =>
  persistPlugin(context, {
    key: 'APP_',
    stores: ['User', 'settingStore']
  })
)
export default pinia
