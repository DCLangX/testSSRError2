// http.ts
import axios, { AxiosResponse } from 'axios'
import { Toast } from 'vant'
const service = axios.create({
  baseURL: '/',
  // 是否跨站点访问控制请求
  withCredentials: false,
  timeout: 6000
})

// 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    const res = response.data
    return await new Promise((resolve, reject) => {
      resolve(res)
    })
  },
  async (error) => {
    Toast.fail({
      duration: 0,
      forbidClick: true,
      message: '响应拦截器发生错误'
    })
    return await Promise.reject(error)
  }
)

export default service
