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

// delAdmin
export function delAdmin(params) {
  return request({
    url: '/adminMg/delAdmin',
    method: 'get',
    params: params
  })
}

// forbid
export function forbid(params) {
  return request({
    url: '/adminMg/forbid',
    method: 'get',
    params: params
  })
}
