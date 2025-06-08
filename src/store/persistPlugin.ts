const KEY_NAME = 'PINIA_STORE_'
export default function (context: any) {
  const { store } = context
  const key = KEY_NAME + store.$id
  //  持久化存储
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(key, JSON.stringify(store.$state))
  })
  // 读取
  try {
    const data = localStorage.getItem(key)
    if (data) {
      store.$patch(JSON.parse(data))
    }
  } catch (error) {
    localStorage.removeItem(key)
  }
}
