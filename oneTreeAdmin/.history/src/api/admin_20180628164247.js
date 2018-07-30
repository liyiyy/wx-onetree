import request from '@/utils/request'

export function adminRegist(data) {
  return request({
    url: '/admin/regist',
    method: 'post',
    data: data
  })
}
