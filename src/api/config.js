import axios from 'axios'
import { Toast } from 'vant'

const envUrlMap = {
  "development": "http://49.4.64.63:1603/",
  "test": "http://49.4.64.63:1603/",
  "production": "http://49.4.64.63:1603/"
}

let node_env = process.env.NODE_ENV

const _axios = axios.create({
  baseURL: envUrlMap[node_env],
  withCredentials: true
})

_axios.interceptors.request.use(
  config => {
    config['credentials'] = true
    return config
  }, err => {
    return Promise.reject(err)
  })

_axios.interceptors.response.use(response => {
  let data = response.data
  if (data && !data.success) {
    Toast(data.msg)
    return Promise.reject(data)
  }
  return response.data
}, error => {
  Toast.error((error.response && error.response.data.msg) || '服务异常')
  return Promise.reject(error.response)
})

export default _axios