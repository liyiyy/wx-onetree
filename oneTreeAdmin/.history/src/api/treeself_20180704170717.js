import request from '@/utils/request'

export function addtree(params) {
  return request({
    url: '/treeself/add',
    method: 'get',
    params: params
  })
}
