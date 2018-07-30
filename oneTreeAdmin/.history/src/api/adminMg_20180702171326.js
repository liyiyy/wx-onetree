import request from '@/utils/request'

export function adminRegist(params) {
  return request({
    url: '/adminMg/addAdminUser',
    method: 'post',
    data: params
  })
}
