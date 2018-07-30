import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/adminMg/list',
    method: 'get',
    params
  })
}
