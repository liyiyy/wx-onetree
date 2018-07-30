import request from '@/utils/request'

export function getlist(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params: params
  })
}
