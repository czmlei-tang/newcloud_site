<template>
  <el-container class="father-box">
    <div class="left-detail">
      <div class="left-detail-son">
        <a>
          <el-avatar
            :src="userInfo.avatar"
            shape="square"
            size="large"
            fit="contain"/>
        </a>
        <a class="a-l" @click="mid(1)">
          <i class="el-icon-chat-dot-round"/>
          <div>消息</div>
        </a>
        <a
          class="a-l"
          @click="mid(2)">
          <i class="el-icon-s-custom"/>
          <div>好友</div>
        </a>
        <a
          class="a-l"
          @click="mid(3)">
          <i class="el-icon-user "/>
          <div>群组</div>
        </a>
      </div>
    </div>
    <el-container>
      <el-aside class="right-menu">
        <search class="se-chat"/>
        <!--        历史消息-->
        <ul v-infinite-scroll="history" v-if="type===1" style="overflow:auto" class="ul-mid infinite-list">
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
        <!--        好友列表-->
        <ul v-infinite-scroll="history" v-if="type===2" style="overflow:auto" class="ul-mid infinite-list">
          <li v-for="item in friendList" :key="item.id" class="li-mid infinite-list-item" @click="chatFriendDetail(item)">
            <el-avatar :src="item.avatar" shape="circle" size="50"/>
            <div>
              <h4>{{ item.remark }}</h4>
            </div>
          </li>
        </ul>
        <!--   群组     -->
        <ul v-infinite-scroll="history" v-if="type===3" style="overflow:auto" class="ul-mid infinite-list">
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
          {{ mainTop.remark }}
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
import loginApi from '~/api/login'
import chatApi from '~/api/chat'

export default {
  components: {
    ChatEditor,
    search
  },
  data() {
    return {
      userInfo: {},
      type: 1,
      indexList: [],
      friendList: [],
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
  created() {
    if (cookie.get('newcloud_jwt_token')) {
      this.getUserInfo()
    } else {
      this.$router.push('/login')
    }
    // 检查登录状态
    const id = this.$route.params.id
    console.log(id)
  },
  methods: {
    getUserInfo() {
      // 如果token存在，则携带token的值向服务器发起请求
      loginApi.getLoginInfo().then(response => {
        // 渲染页面
        this.userInfo = response.data.userInfo
      })
    },
    chatFriendDetail(item) {
      item.id
      this.showDetail = true
      console.log(this.$refs.getMessage)
    },
    mid(i) {
      switch (i) {
        case 1:
          this.mes()
          this.type = 1
          break
        case 2:
          this.friend()
          this.type = 2
          break
        case 3:
          this.group()
          this.type = 3
          break
      }
    },
    mes() {
    },
    friend() {
      chatApi.readFriends().then(res => {
        this.indexList = res.data.friends
      })
    },
    group() {}
  }
}
</script>

<style scoped>
</style>
