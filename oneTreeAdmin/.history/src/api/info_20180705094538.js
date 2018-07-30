import request from '@/utils/request'

export function upPic(params) {
  return request({
    url: '/info/upload',
    method: 'get',
    params: params
  })
}
