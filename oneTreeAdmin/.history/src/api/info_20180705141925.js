import request from '@/utils/request'

export function upPic(params) {
  return request({
    url: '/info/upload',
    method: 'get',
    params: params
  })
}

export function addswiper(params) {
  return request({
    url: '/info/addswiper',
    method: 'get',
    params: params
  })
}
