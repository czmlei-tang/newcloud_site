import request from '@/utils/request'

export default {
  readFriends() {
    return request({
      url: `/api/chat/friend/auth/read/friends`,
      method: 'get'
    })
  }
}
