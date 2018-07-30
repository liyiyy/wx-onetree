import request from '@/utils/request'

export function getList() {
  return request({
    url: '/adminMg/list',
    method: 'get',
    params: {
      page: 1
    }
  })
}

export function adminRegist(params) {
  return request({
    url: '/adminMg/addAdminUser',
    method: 'post',
    data: params
  })
}
