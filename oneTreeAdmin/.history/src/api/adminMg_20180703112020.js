import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/adminMg/list',
    method: 'get',
    params: params
  })
}

export function adminRegist(data) {
  return request({
    url: '/adminMg/addAdminUser',
    method: 'post',
    data: data
  })
}
