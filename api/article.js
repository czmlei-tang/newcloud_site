import request from '@/utils/request'

export default {

  readAllArticle(page, limit) {
    return request({
      url: `/api/edu/article/list/${page}/${limit}`,
      method: 'get'
    })
  },
  readHotArticles() {
    return request({
      url: `/api/edu/article/hot`,
      method: 'get'
    })
  },
  readArticle(id) {
    return request({
      url: `/api/edu/article/read/${id}`,
      method: 'get'
    })
  }

}
