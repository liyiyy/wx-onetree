import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params: params
  })
}
