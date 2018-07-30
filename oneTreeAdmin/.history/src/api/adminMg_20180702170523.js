import request from '@/utils/request'

export function adminRegist(params) {
  return request({
    url: '/adminMg/list',
    method: 'get',
    params
  })
}
