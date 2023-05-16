import request from '~/utils/request'
export default {
  getQuestions() {
    return request({
      // baseURL: 'http://localhost:8140',
      url: `/api/edu/comment/auth/my/question`,
      method: 'get'
    })
  }
}
