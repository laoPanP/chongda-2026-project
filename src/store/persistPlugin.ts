// pinia持久化插件-已上传npm 这个文件已废弃
interface PersistPluginOptions {
  key?: string // 自定义存储键名前缀
  stores?: string[] // 指定需要持久化的 store（白名单）
}

const DEFAULT_KEY_NAME = 'PINIA_STORE_'

export default function persistPlugin(context: any, options?: PersistPluginOptions) {
  const { store } = context

  // 1. 检查是否在白名单中（如果提供了 stores 参数）
  if (options && options.stores && !options.stores.includes(store.$id)) {
    return // 跳过不在白名单中的 store
  }

  // 2. 生成存储键名 只要传了options，就优先使用options.key，哪怕是空
  const keyPrefix = options ? options.key : DEFAULT_KEY_NAME
  const storageKey = keyPrefix + store.$id

  // 3. 监听页面关闭前保存状态
  window.addEventListener('beforeunload', () => {
    // localStorage.setItem(key, JSON.stringify(store.state)) vuex写法
    localStorage.setItem(storageKey, JSON.stringify(store.$state))
  })
  // 这里该优先使用这种写法，如果使用beforeunload，对于页面崩溃、浏览器强制关闭、电脑断电等情况是无法写入缓存的，但是使用这个的话，比beforeunload更加实时，更适合这种情况
  // store.$subscribe(() => {
  //   localStorage.setItem(storageKey, JSON.stringify(store.$state))
  // })
  // 4. 初始化时读取状态
  try {
    const data = localStorage.getItem(storageKey)
    if (data) {
      // store.replaceState(JSON.parse(data)) vuex写法
      store.$patch(JSON.parse(data))
    }
  } catch (error) {
    localStorage.removeItem(storageKey)
  }
}
