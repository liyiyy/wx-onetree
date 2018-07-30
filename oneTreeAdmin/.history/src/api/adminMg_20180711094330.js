import request from '@/utils/request'

export function adminRegist(data) {
  return request({
    url: '/admin/addAdmin',
    method: 'post',
    data: data
  })
}

// delAdmin
export function delAdmin(params) {
  return request({
    url: '/admin/delAdmin',
    method: 'get',
    params: params
  })
}

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
