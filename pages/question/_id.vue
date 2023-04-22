<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-question">
        <div class="fl col-7">
          <section class="mr30 pt10">
            <section class="path-wrap txtOf hLh30">
              <a href="http://localhost:3000" title="" class="c-999 fsize14">首页</a>
              \
              <a href="http://localhost:3000/question" title="" class="c-999 fsize14">全部问答</a>
              \ <span class="c-333 fsize14">{{ que.content }}</span>
            </section>
            <!-- /问题详情 开始 -->
            <div>
              <section class="q-infor-box">
                <div class="pr">
                  <aside class="q-head-pic">
                    <img :src="que.avatar" alt="">
                    <p class="hLh30 txtOf"/>
                  </aside>
                  <section class="q-txt-box">
                    <aside class="q-share">
                      <span class="fl" title="分享到："><em class="icon14 q-share-icon mt5">&nbsp;</em></span>
                      <div class="fl ml10" style="width: 95px;">
                        <div
                          id="bdshare"
                          class="bdsharebuttonbox bdshare-button-style1-16"
                          data-bd-bind="1561107203843"
                          style="right: -160px;">
                          <a title="分享到新浪微博" href="#" class="bds_tsina" data-cmd="tsina"/>
                          <a title="分享到微信" href="#" class="bds_weixin" data-cmd="weixin"/>
                          <a title="分享到QQ空间" href="#" class="bds_qzone" data-cmd="qzone"/>
                          <a title="分享到腾讯微博" href="#" class="bds_tqq" data-cmd="tqq"/>
                        </div>
                        <script>window._bd_share_config = {
                        'common': {
                        'bdSnsKey': {},
                        'bdText': '',
                        'bdMini': '2',
                        'bdMiniList': false,
                        'bdPic': '',
                        'bdStyle': '1',
                        'bdSize': '16'
                        }, 'share': {}
                        }
                        with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)]</script>
                      </div>
                      <div class="clear"/>
                    </aside>
                    <h3 class="hLh30 txtOf">
                      <em class="icon16 q-tw">&nbsp;</em> <span class="c-blue fsize14"> {{ que.nickname }}</span> <span
                        class="c-999 fsize14"> 课程提问</span>
                    </h3>
                  </section>
                  <section class="ml50 pl10">
                    <div class="mt20">
                      <h3 class="hLh30 txtOf">
                        <span class="fsize18 c-333 vam">{{ que.content }}</span>
                      </h3>
                    </div>
                    <div class="i-q-txt mt15">

                      <span class="c-999 f-fA">{{ que.content }}</span>

                    </div>
                    <div class="mt20 pr10">
                      <section class="fr">
                        <span> <a :class="['noter-dy','vam']" href="#i-art-comment" title="评论">
                          <em class="icon18">&nbsp;</em>(<span id="questionsReplyCount">{{ que.answerNumber }}</span>)
                        </a> <tt class="noter-zan vam ml10 f-fM" title="赞一下" @click="addPraise(que.id)">
                          <em class="icon18 current">&nbsp;</em>(<span>{{ que.goodNumber }}</span>)
                        </tt>
                        </span>
                      </section>
                      <span class="c-ccc fl vam">{{ que.gmtCreate }}</span>
                      <section class="fl ml20 pt10">
                        <div class="taglist clearfix">
                          <a
                            v-if="que.tag"
                            :title="que.tag"
                            data-id="5"
                            onclick="submitForm('5','questionsTagId')"
                            class="list-tag"
                            href="javascript:;">{{ que.tag }}</a>
                        </div>
                      </section>
                      <div class="clear"/>
                    </div>
                  </section>
                </div>
                <span id="questionsCommentSpan"><!-- /最佳答案 开始-->
                  <div v-if="bestAskVo.id" class="good-anwer-box">
                    <h4 class="g-a-title">
                      <span class="bg-green vam"><em class="icon24 mr5">&nbsp;</em>最佳答案</span>
                    </h4>
                    <section class="good-answer mt10">
                      <section class="question-list lh-bj-list pr">
                        <ul class="pr10">
                          <li>
                            <aside class="noter-pic">
                              <img :src="bestAskVo.avatar" alt="" width="50" height="50">
                            </aside>
                            <div class="of hLh20">
                              <span class="fl"> <font class="fsize12 c-blue">{{ bestAskVo.nickname }}</font> <font
                                class="fsize12 c-999 ml5">回复：{{ bestAskVo.answerNickName }}</font></span>
                            </div>
                            <div class="noter-txt mt5">
                              <p>{{ bestAskVo.content }}</p>
                            </div>
                            <div class="of mt5">
                              <span class="fr"><font class="fsize12 c-999 ml5">{{
                                bestAskVo.gmtCreate
                              }}</font></span> <span
                                class="fl"> <tt
                                  class="noter-zan vam ml10 f-fM"
                                  title="赞一下"
                                  @click="addPraise(bestAskVo.id)">
                                  <em class="icon18">&nbsp;</em>点赞(<span>{{ bestAskVo.goodNumber }}</span>)
                                </tt>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </section>
                  </div>
                  <!-- /最佳答案 结束-->
                  <!-- /回答列表 开始 -->
                  <div class="q-i-noter-box">
                    <section class="q-i-reply">
                      <h6 class="c-c-content c-infor-title">
                        <span>问答列表</span>
                      </h6>
                    </section>
                    <!-- /无数据提示 开始-->
                    <section v-if="!nestedComment" class="no-data-wrap">
                      <em class="icon30 no-data-ico">&nbsp;</em> <span
                        class="c-666 fsize14 ml10 vam">还没有人回答，提问者喊你去回答...</span>
                    </section>
                    <!-- /无数据提示 结束-->
                    <!-- /有数据提示 开始-->
                    <section v-if="nestedComment" class="question-list lh-bj-list pr">
                      <ul class="pr10">
                        <li v-for="item in nestedComment" :key="item.id" class="que_li">
                          <aside class="noter-pic">
                            <img :src="item.avatar" alt="" width="50" height="50">
                          </aside>
                          <div class="of hLh20">
                            <span class="fl"> <font class="fsize12 c-blue">{{ item.nickname }}</font> <font
                              class="fsize12 c-999 ml5">回复：{{ item.nameAnswer }}</font></span>
                          </div>
                          <div class="noter-txt mt5" @click="toAddQuestions(item.id,item.nickname,item.id)">
                            <p>{{ item.content }}</p>
                          </div>
                          <div class="of mt5">
                            <span class="fr"><font class="fsize12 c-999 ml5">{{ item.gmtCreate }}</font></span> <span
                              class="fl"> <a
                                title="回答"
                                class="noter-dy vam"
                                @click="getCommentsById(item.id)">
                                <em class="icon18">&nbsp;</em>点击加载更多(<span>{{ item.answerNumber }}</span>)
                              </a> <tt class="noter-zan vam ml10 f-fM" title="赞一下" @click="addPraise(item.id)">
                                <em class="icon18">&nbsp;</em>点赞(<span>{{ item.goodNumber }}</span>)
                              </tt>
                            </span>
                          </div>
                          <section class="question-list lh-bj-list pr">
                            <ul v-if="secondData&&secondData[0].masterId===item.id" class="pr10">
                              <li v-for="i in secondData" :key="i.id" class="que_li">
                                <aside class="noter-pic">
                                  <img :src="i.avatar" alt="" width="50" height="50">
                                </aside>
                                <div class="of hLh20">
                                  <span class="fl"> <font class="fsize12 c-blue">{{ i.nickname }}</font> <font
                                    class="fsize12 c-999 ml5">回复：{{ i.nameAnswer }}</font></span>
                                </div>
                                <div class="noter-txt mt5" @click="toAddQuestions(i.id,i.nickname,item.id)">
                                  <p>{{ i.content }}</p>
                                </div>
                                <div class="of mt5">
                                  <span class="fr"><font class="fsize12 c-999 ml5">{{ i.gmtCreate }}</font></span> <span
                                    class="fl"> <tt
                                      class="noter-zan vam ml10 f-fM"
                                      title="赞一下"
                                      @click="addPraise(i.id)">
                                      <em class="icon18">&nbsp;</em>点赞(<span>{{ i.goodNumber }}</span>)
                                    </tt>
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </section>
                        </li>
                      </ul>
                    </section>
                  </div>
                </span>
              </section>
            </div>
            <!-- /问题列表 结束 -->
          </section>
        </div>
        <aside class="fl col-3">
          <div class="mt30 pl10">
            <section class="pt10">
              <a title="回复阿婆主" class="comm-btn c-btn-5" @click="toAddQuestions(que.id,que.nickname)">回复阿婆主</a>
            </section>
            <section class="pt20">
              <div class="taglist clearfix">
                <a
                  v-for="tag in tags"
                  :key="tag.id"
                  data-id="11"
                  class="list-tag "
                  href="javascript:;"
                  @click="submitForm('11','questionsTagId')">{{ tag.title }}</a>
              </div>
            </section>
            <!-- /标签云 -->
            <section class="mt30">
              <section class="c-infor-tabTitle c-tab-title">
                <a href="javascript: void(0)" title="热门问答推荐">热门问答推荐</a>
              </section>
              <div class="q-r-rank-list">
                <ul id="hotQuestions">
                  <li v-for="hot in hotCommentList" :key="hot.id">
                    <aside class="q-r-r-num">
                      <div class="replyNum"><span class="r-b-num">{{ hot.answerNumber }}</span>
                        <p class="hLh20"><span class="c-999 f-fA">回答数</span></p>
                      </div>
                    </aside>
                    <h4 class="hLh30 txtOf"><em class="icon16 q-tw">&nbsp;</em> <a
                      :href="'/question/'+hot.id"
                      title=""
                      class="fsize14 c-333 ml5">{{ hot.content }}</a></h4></li>
                </ul>
              </div>
            </section>
            <!-- /热门问答排行 -->
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /提问题 结束 -->
    <el-drawer
      :visible.sync="publishQue"
      :with-header="true"
      :direction="direction"
      :title="'回复：'+form.name"
      size="50%">
      <el-form label-width="auto" class="form-que">
        <el-form-item>
          <el-input
            v-model="form.desc"
            maxlength="100"
            type="textarea"
            placeholder="请留下一些友善的话语！"
            show-word-limit/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onCancle">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import commentApi from '~/api/comment'

export default {
  async asyncData(page) {
    const id = page.route.params.id

    const response = await commentApi.readOneQuestion(id)
    const que = response.data.comment
    const hotCommentList = response.data.hotCommentList
    const tags = response.data.tags
    const bestAskVo = response.data.bestAskVo
    const comments = await commentApi.readComments(id)
    const nestedComment = comments.data.webComments
    return {
      que,
      hotCommentList,
      tags,
      bestAskVo,
      nestedComment
    }
  },
  components: {},
  data() {
    return {
      publishQue: false,
      secondData: null,
      form: {
        id: '',
        name: '',
        masterId: '',
        desc: ''
      },
      direction: 'btt'
    }
  },
  methods: {
    getCommentsById(id) {
      console.log(id)
      commentApi.readSecondDataComments(id).then(response => {
        this.secondData = response.data.webComments
      })
      console.log(this.secondData)
    },
    addPraise(id) {
      console.log(id)
      commentApi.IncreaseGood(id).then(res => {
        console.log(res)
      }).catch(() => {
      })
    },
    toAddQuestions(id, name, masterId) {
      this.form.id = id
      this.form.name = name
      this.form.masterId = masterId
      this.publishQue = true
    },
    onSubmit() {
      const comment = {
        answerId: this.form.id,
        content: this.form.desc,
        status: 0,
        masterId: this.form.masterId
      }
      commentApi.pulishComment(comment).then(res => {
        if (res.code === 20000) {
          this.$message({
            message: res.message,
            type: 'success',
            duration: 5 * 1000
          })
        }
      })
      this.publishQue = false
    },
    onCancle() {
      this.publishQue = false
    }
  }
}
</script>
<style scoped>
.answer {
  position: fixed;
  bottom: 0;
  left: auto;
  right: auto;
  border-radius: 10px;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.que_li {
  background: rgba(239, 239, 239, 0.7);
  margin-top: 10px;
}

</style>
