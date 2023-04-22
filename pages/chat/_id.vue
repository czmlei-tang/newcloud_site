<template>
  <el-container class="father-box">
    <div class="left-detail">
      <div class="left-detail-son">
        <a>
          <el-avatar
            shape="square"
            size="large"
            fit="contain"
            src="https://thirdwx.qlogo.cn/mmopen/vi_32/qB8wVXOLIwagrBnzA2rhD70WspeWr8NKFJPp2DHeNsyTPO7FPHxyJLDIiaX2ftIK6U7iczNGvzyqwQqksiaD2gmwQ/132"/>
        </a>
        <router-link to="/chat/list" class="a-l">
          <i class="el-icon-chat-dot-round"/>
          <div>消息</div>
        </router-link>
        <a class="a-l">
          <i class="el-icon-s-custom"/>
          <div>好友</div>
        </a>
        <a class="a-l">
          <i class="el-icon-user "/>
          <div>群组</div>
        </a>
        <a class="a-l">
          <i class="el-icon-s-unfold"/>
        </a>
      </div>
    </div>
    <el-container>
      <el-aside class="right-menu">
        <search class="se-chat"/>
        <ul v-infinite-scroll="history" style="overflow:auto" class="ul-mid infinite-list">
          <li v-for="item in indexList" :key="item.id" class="li-mid infinite-list-item" @click="chatDetail(item)">
            <el-avatar :src="item.url" shape="circle" size="50"/>
            <div>
              <h4>{{ item.name }}</h4>
              <p class="font-gray">{{ item.message }}</p>
            </div>
            <div>
              <p class="font-gray">{{ item.time }}</p>
            </div>
          </li>
        </ul>
      </el-aside>
      <el-main v-if="showDetail" class="main-do">
        <div class="main-do-top">
          {{ mainTop.name }}
        </div>
        <div class="main-do-mid">
          <ul v-infinite-scroll="history" style="overflow:auto">
            <li v-for="item in mainMidList" :key="item.id" class="li-main-mid infinite-list-item">
              <el-avatar :src="item.url" shape="square" size="50"/>
              <div style="margin-left: 10px">
                <div class="font-gray">{{ item.name }}</div>
                <span>{{ item.EchoMessage }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="main-do-bottom">
          <chat-editor ref="getMessage"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import cookie from 'js-cookie'
import search from '../../components/common/search'
import '../../assets/css/chat.css'
import ChatEditor from '../../components/common/chatEditor'

export default {
  async asyncData(page) {
    if (cookie.get('newcloud_jwt_token')) {
      console.log(cookie.get('newcloud_jwt_token'))
    } else {
      // window.location('/login')
    }
    // 检查登录状态
    const id = page.route.params.id
    console.log(id)
  },
  components: {
    ChatEditor,
    search
  },
  data() {
    return {
      indexList: [
        {
          id: 1,
          name: 'Ray',
          message: '这是一个名片',
          time: '04-16 18:22',
          url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
        },
        {
          id: 1,
          name: '杰克',
          message: '这是一个名片',
          time: '04-16 18:22',
          url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
        },
        {
          id: 1,
          name: '汤姆',
          message: '这是一个名片',
          time: '04-16 18:22',
          url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
        }
      ],
      mainTop: {},
      mainMidList: [
        {
          id: 1,
          name: 'Ray',
          url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          EchoMessage: '回显'
        }
      ],
      showDetail: false
    }
  },
  methods: {
    chatDetail(item) {
      this.mainTop = item
      this.showDetail = true
      console.log(this.$refs.getMessage)
    }
  }
}
</script>

<style scoped>
</style>
