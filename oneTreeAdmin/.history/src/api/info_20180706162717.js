import request from '@/utils/request'

export function getlist(params) {
  return request({
    url: '/info/list',
    method: 'get',
    params: params
  })
}

export function upPic(data) {
  return request({
    url: '/info/upload',
    method: 'post',
    data: data
  })
}

export function addswiper(params) {
  return request({
    url: '/info/addswiper',
    method: 'get',
    params: params
  })
}

export function delOne(params) {
  return request({
    url: '/info/del',
    method: 'get',
    params: params
  })
}
