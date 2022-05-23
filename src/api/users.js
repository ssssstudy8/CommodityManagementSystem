import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    params
  })
}

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: 'put'
  })
}

export const addUser = (data) => {
  return request({
    url: 'users',
    method: 'post',
    data
  })
}

export const deleteUser = (id) => {
  return request({
    url: `users/${id}`,
    method: 'delete'
  })
}
