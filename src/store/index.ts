// 主仓库
import { createPinia } from 'pinia'
import persistPlugin from './persistPlugin'

// 创建仓库
let pinia = createPinia()
pinia.use(persistPlugin)
export default pinia
