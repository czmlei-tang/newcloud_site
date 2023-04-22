import request from '@/utils/request'

export default {

  readFriend(page, limit) {
    return request({
      url: `/api/edu/article/list/${page}/${limit}`,
      method: 'get'
    })
  }
}
