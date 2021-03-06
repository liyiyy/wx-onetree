import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/adminMg/list',
    method: 'get',
    params: data
  })
}

export function adminRegist(params) {
  return request({
    url: '/adminMg/addAdminUser',
    method: 'post',
    data: params
  })
}
