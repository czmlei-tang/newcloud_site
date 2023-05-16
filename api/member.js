import request from '~/utils/request'
export default {
  readMember() {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/ucenter/member/auth/read`,
      method: 'get'
    })
  },
  updateMember(member) {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/ucenter/member/auth/update`,
      method: 'put',
      data: member
    })
  },
  checkOldPassword(oldPassword) {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/ucenter/member/auth/check/password`,
      method: 'get',
      params: {
        oldPassword: oldPassword
      }
    })
  },
  updatePassword(password) {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/ucenter/member/auth/update/password`,
      method: 'put',
      params: {
        password: password
      }
    })
  }
}
