import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/adminMg/list',
    method: 'get',
    data: params
  })
}

export function adminRegist(params) {
  return request({
    url: '/adminMg/addAdminUser',
    method: 'post',
    data: params
  })
}
