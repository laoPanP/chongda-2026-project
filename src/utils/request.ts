// 对axios二次封装：使用请求拦截器和响应拦截器
import axios from 'axios'
import { ElNotification } from 'element-plus'
//获取token
import useUserStore from '@/store/modules/user'
//第一步：利用axios对象的create方法创建一个axios实例，配置基础路径、超时时间
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径，发请求的时候，路径当中会出现api
  timeout: 5000 //超时时间
})
//第二步：请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use(
  (config) => {
    let userStore = useUserStore()
    if (userStore.token) {
      config.headers.token = userStore.token
    }
    //config：配置对象，对象里面有一个属性很重要，headers请求头:经常给服务器端携带公共参数
    return config
  },
  (err) => {
    console.log(err)
    //温馨提示：这里错误信息，打印在控制台
    return Promise.reject(new Error('fail'))
  }
)
//第三步：响应拦截器：在发请求之后，响应拦截器可以检测到，可以在请求发出去之后做一些事情
request.interceptors.response.use(
  (res) => {
    //简化数据
    if (res.data.code !== 200) {
      ElNotification({
        message: res.data.message || '操作失败',
        type: 'warning'
      })
      return Promise.reject(res.data) // 继续传递错误
    }
    return res.data
  },
  (err) => {
    console.log(err)
    //失败回调：处理http网络错误
    //定义一个变量：存储网络错误信息
    let message = ''
    //状态码
    let status = err.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求错误'
        break
      case 500:
        message = '服务器错误'
        break
      case 201:
        message = err.response.message
        break
      default:
        message = '网络错误'
    }
    // 提示错误信息
    ElNotification({
      type: 'error',
      message
    })
    return Promise.reject(err)
  }
)
export default request
