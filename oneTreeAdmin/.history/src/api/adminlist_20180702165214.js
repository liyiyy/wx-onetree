import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/adminlist/list',
    method: 'get',
    params
  })
}
