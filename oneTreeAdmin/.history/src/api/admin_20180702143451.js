import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/login/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
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
