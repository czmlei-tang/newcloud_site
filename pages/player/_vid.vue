<template>
  <div class="player">
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css" >

    <script charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"/>
    <!-- 阿里云视频播放器组件 -->
    <script charset="utf-8" src="https://player.alicdn.com/aliplayer/presentation/js/aliplayercomponents.min.js"/>

    <!-- 播放器 -->
    <div id="J_prismPlayer" class="prism-player"/>
  </div>
</template>

<script>
import courseApi from '~/api/course'

export default {

  async asyncData(page) {
    // 得到视频id
    const vid = page.route.params.vid
    // console.log(vid)
    // 根据视频id获取播放凭证
    const response = await courseApi.getPlayAuth(vid)
    return {
      vid: vid,
      playauth: response.data.playAuth
    }
  },

  // 页面渲染之后执行
  mounted() {
    /* eslint-disable no-undef */
    new Aliplayer({
      id: 'J_prismPlayer',
      width: '70%',
      vid: this.vid,
      playauth: this.playauth,
      encryptType: 1 // 当播放私有加密流时需要设置。

    }, function(player) {
      console.log('播放器创建好了。')
    })
  }
}
</script>
<style scoped>
.player{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#J_prismPlayer {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>

