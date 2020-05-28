import _axios from './config'

// 获取首页基本信息数量展示
export function getQueryBasicInfo(params){
  const url = `scs/community/queryBasicInfo`
  return _axios.post(url,params)
}

// 查询小区列表
export function getCommunityList(params){
  const url = `scs/community/getCommunityList`
  return _axios.post(url,params)
}

// 标准地址查询(绑定小区地址的时候用)
export function queryDoorAddress(params){
  const url = `scs/community/queryDoorAddress`
  return _axios.post(url,params)
}

// 查询你所有的上级组织机构
export function queryFleetLevel(params){
  const url = `scs/fleet/queryFleetLevel`
  return _axios.post(url,params)
}

// 添加小区
export function insertCommunity(params){
  const url = `scs/community/insertCommunity`
  return _axios({
    url,
    method: 'POST',
    data: params,
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 根据小区查询房屋
export function selectHouseByCommunity(params){
  const url = `scs/house/selectHouseByCommunity`
  return _axios.post(url,params)
}

//  查询小区里面的人口
export function queryCommunityPopulation(params){
  const url = `scs/community/queryCommunityPopulation`
  return _axios.post(url,params)
}

// 修改个人信息
export function updateCollectPopulationHis(params){
  const url = `scs/populationHis/updateCollectPopulationHis`
  return _axios({
    url,
    method: 'POST',
    data: params,
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}


// 查询农村房屋
export function getCollectHouseList(params){
  const url = `scs/house/getCollectHouseList`
  return _axios.post(url,params)
}


// 查询实有人口列表
export function getCollectPopulationList(params){
  const url = `scs/population/getCollectPopulationList`
  return _axios.post(url,params)
}

