import request from '@/utils/request'

export function adminRegist(data) {
  return request({
    url: '/admin/addAdmin',
    method: 'post',
    data: data
  })
}
