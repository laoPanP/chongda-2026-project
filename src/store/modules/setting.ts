//关于layout配置相关配置仓库
import { defineStore } from 'pinia'
let useLayoutStore = defineStore('settingStore', {
  //存储数据
  state: () => {
    return {
      collapse: true //菜单折叠控制
    }
  },
  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    }
  },
  getters: {}
})
export default useLayoutStore
