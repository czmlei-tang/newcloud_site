<template>
  <!-- 公共头 -->
  <header id="header">
    <section class="container">
      <h1 id="logo">
        <a href="#" title="newcloud线上教育">
          <img src="~/assets/img/logo.png" width="100%" alt="newcloud线上教育">
        </a>
      </h1>
      <div class="h-r-nsl">
        <ul class="nav">
          <router-link to="/" tag="li" active-class="current" exact>
            <a>首页</a>
          </router-link>
          <router-link to="/course" tag="li" active-class="current">
            <a>课程</a>
          </router-link>
          <router-link to="/teacher" tag="li" active-class="current">
            <a>名师</a>
          </router-link>
          <router-link to="/article" tag="li" active-class="current">
            <a>文章</a>
          </router-link>
          <router-link to="/question" tag="li" active-class="current">
            <a>问答</a>
          </router-link>
        </ul>
        <!-- / nav -->
        <ul class="h-r-login">
          <li v-if="!userInfo" id="no-login">
            <a href="/login" title="登录">
              <em class="icon18 login-icon">&nbsp;</em>
              <span class="vam ml5">登录</span>
            </a>
            |
            <a href="/register" title="注册">
              <span class="vam ml5">注册</span>
            </a>
          </li>
          <!-- 注意undis将当前节点隐藏了 -->
          <li v-if="false" id="is-login-one" class="mr10">
            <a id="headerMsgCountId" :href="'/chat/'+userInfo.id" title="消息">
              <em class="icon18 news-icon">&nbsp;</em>
            </a>
            <q class="red-point">&nbsp;</q>
          </li>
          <!-- 注意undis将当前节点隐藏了 -->
          <li v-if="userInfo" id="is-login-two" class="h-r-user">
            <a :href="'/ucenter'" title>
              <img :src="userInfo.avatar" width="30" height="30" class="vam picImg" alt>
              <span id="userName" class="vam disIb">{{ userInfo.nickname }}</span>
            </a>
            <a href="javascript:void(0)" title="退出" class="ml5" @click="logout()">退出</a>
          </li>
          <!-- /未登录显示第1 li；登录后显示第2，3 li -->
        </ul>
        <aside class="h-r-search">
          <el-form>
            <el-form-item>
              <!--              <input :name="queryCourse.courseName" type="text" placeholder="搜索课程" value>-->
              <!--              <button type="submit" class="s-btn" @click="searchCourse">-->
              <!--                <em class="icon18">&nbsp;</em>-->
              <!--              </button>-->
              <el-autocomplete
                v-model="title"
                :fetch-suggestions="searchCourse"
                :trigger-on-focus="false"
                prefix-icon="el-icon-search"
                class="inline-input"
                placeholder="请输入课程内容"
                value-key="title"
                @select="handleSelect"
              />
            </el-form-item>
          </el-form>
        </aside>
      </div>
      <aside class="mw-nav-btn">
        <div class="mw-nav-icon"/>
      </aside>
      <div class="clear"/>
    </section>
  </header>
  <!-- /公共头 -->
</template>

<script>
import loginApi from '~/api/login'
import cookie from 'js-cookie'
import courseApi from '../api/course'

export default {
  data() {
    return {
      userInfo: null,
      queryCourse: [],
      title: ''
    }
  },

  // 登录成功后获取用户信息
  // 页面渲染之前执行：尚未有window对象
  created() {
    this.getUserInfo()
  },

  // 页面渲染之后执行：可以有window对象
  mounted() {
    const token = this.$route.query.token
    if (token) {
      // 将jwt写入cookie
      cookie.set('newcloud_jwt_token', token, { domain: 'localhost' })
      window.location.href = '/'
    }
  },

  methods: {
    getUserInfo() {
      // 如果cookie中的token值不存在，则无需获取用户信息
      if (!cookie.get('newcloud_jwt_token')) {
        return
      }

      // 如果token存在，则携带token的值向服务器发起请求
      loginApi.getLoginInfo().then(response => {
        // 渲染页面
        this.userInfo = response.data.userInfo
      })
    },

    logout() {
      // 清除cookie
      cookie.set('newcloud_jwt_token', '', { domain: 'localhost' })
      // 跳转页面
      window.location.href = '/'
    },
    searchCourse(queryString, cb) {
      courseApi.getCourses(queryString).then(res => {
        this.queryCourse = res.data.courses
        cb(this.queryCourse)
      })
    },
    handleSelect(item) {
      console.log(item)
      this.$router.push('/course/' + item.id)
    }
  }
}
</script>
<style scoped>
</style>
