import _axios from './config'

// 查询用户信息
export function getDetailInfo(params){
  const url = `scs/subscriber/detailInfo`
  return _axios.post(url,params)
}