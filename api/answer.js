import request from '~/utils/request'
export default {
  getAnswers() {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/edu/comment/auth/my/answer`,
      method: 'get'
    })
  }
}
