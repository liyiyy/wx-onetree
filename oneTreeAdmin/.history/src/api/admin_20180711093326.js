import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

export function adminRegist(data) {
  return request({
    url: '/admin/addAdmin',
    method: 'post',
    data: data
  })
}

// delAdmin
export function delAdmin(params) {
  return request({
    url: '/admin/delAdmin',
    method: 'get',
    params: params
  })
}
