import request from '@/utils/request'

export default {
  readQuestions(page, limit, webCommentQueryVo) {
    return request({
      url: `/api/edu/comment/list/${page}/${limit}`,
      method: 'get',
      params: webCommentQueryVo
    })
  },

  readOneQuestion(id) {
    return request({
      url: `/api/edu/comment/get/${id}`,
      method: 'get'
    })
  },

  readComments(parentId) {
    return request({
      url: `/api/edu/comment/first/${parentId}`,
      method: 'get'
    })
  },

  pulishComment(comment) {
    return request({
      url: `/api/edu/comment/auth/pulish`,
      method: 'post',
      data: comment
    })
  },

  removeComment(id) {
    return request({
      url: `/api/edu/comment/auth/delete/${id}`,
      method: 'delete'
    })
  },

  IncreaseGood(id) {
    return request({
      url: `/api/edu/comment/auth/incr/good-number/${id}`,
      method: 'get'
    })
  },

  readSecondDataComments(id) {
    return request({
      url: `api/edu/comment/second/${id}`,
      method: 'get'
    })
  },
  getLikeSubjectData(title) {
    return request({
      url: `api/edu/subject/like/all`,
      method: 'get',
      params: {
        title: title
      }
    })
  }

}
