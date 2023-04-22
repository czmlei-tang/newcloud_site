<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-question">
        <div class="fl col-7">
          <section class="mr30 pt10">
            <section class="c-infor-tabTitle c-tab-title">
              <a
                :class="{current:!$route.query.subjectId||Number($route.query.subjectId)===0}"
                href="javascript: void(0)"
                title="全部问答"
                @click="searchAll(0)">全部问答</a>
              <a
                :class="{current:Number($route.query.subjectId)===1}"
                href="javascript: void(0)"
                title="课程问答"
                @click="searchAll(1)">课程问答</a>
            </section>
            <div class="js-wrap">
              <section class="fr">
                <span class="c-ccc"> <tt class="c-master f-fM">1</tt>/<tt class="c-666 f-fM">2</tt>
                </span>
              </section>
              <section class="fl">
                <ol class="js-tap clearfix">
                  <li :class="{'current bg-orange':$route.query.gmtCreate}"><a
                    href="javascript:void(0)"
                    title="最新"
                    @click="searchGmtCreate(1)">最新</a></li>
                  <li :class="{'current bg-orange':$route.query.watchNumber}"><a
                    href="javascript:void(0)"
                    title="热门"
                    @click="searchWatchNumber(1)">热门</a>
                  </li>
                  <li :class="{'current bg-orange':$route.query.answerNumber}"><a
                    href="javascript:void(0)"
                    title="等待回答"
                    @click="searchAnswerNumber(1)">等待回答</a>
                  </li>
                </ol>
              </section>
            </div>
            <!-- /问题列表 开始 -->
            <div class="q-list">
              <section v-if="commentList.length>0" class="q-all-list">
                <ul>
                  <li
                    v-for="item in commentList"
                    :key="item.id">
                    <aside class="q-head-pic">
                      <img :src="item.avatar" alt="&quot;&quot;&quot;">
                      <p class="hLh30 txtOf">
                        <span class="c-999"> {{ item.nickname }}</span>
                      </p>
                    </aside>
                    <section class="q-txt-box">
                      <a :href="'/question/'+item.id" class="replyBrowseNum" title="">
                        <div class="replyNum">
                          <span class="r-b-num">{{ item.answerNumber }}</span>
                          <p class="hLh30">
                            <span class="c-999 f-fA">回答数</span>
                          </p>
                        </div>
                        <div class="browseNum">
                          <span class="r-b-num">{{ item.watchNumber }}</span>
                          <p class="hLh30">
                            <span class="c-999 f-fA">浏览数</span>
                          </p>
                        </div>
                      </a>
                      <h3 class="hLh30 txtOf">
                        <em class="icon16 q-tw">&nbsp;</em>
                        <a :href="'/question/'+item.id" title="" class="fsize16 c-333 vam">{{ item.content }}</a>
                      </h3>
                      <h3 class="hLh30 txtOf mt5">
                        <em class="icon16 q-hd">&nbsp;</em>
                        <span class="fsize12 c-999 vam"> <tt class="c-green f-fM mr5">[最佳回答]</tt>
                          {{ item.bestAsk }}
                        </span>
                        <!-- 采纳最佳显示最佳答案内容 -->
                      </h3>
                      <div class="mt15">
                        <span class="c-ccc fl vam">{{ item.gmtCreate }}</span>
                        <section class="fl ml20 pt10">
                          <div class="taglist clearfix">
                            <a
                              v-if="item.tag"
                              :href="'/question/'+item.id"
                              :title="item.tag"
                              data-id="5"
                              class="list-tag">{{ item.tag }}</a>
                          </div>
                        </section>
                        <div class="clear"/>
                      </div>
                    </section>
                  </li>
                </ul>
              </section>

              <!-- 公共分页 开始 -->
              <!--              <div>-->
              <!--                <div class="paging">-->
              <!--                  <a :class="{undisable: page1===1}" title @click="prePage(1)">首</a>-->
              <!--                  <a id="backpage" :class="{undisable: page1===1}" href="#" title @click="prePage(page1-1)">&lt;</a>-->
              <!--                  <a href="#" title class="current undisable">{{ page1 }}</a>-->
              <!--                  <a v-if="!page1===total" href="#" title @click="nextPage(page1+1)">{{ page1 + 1 }}</a>-->
              <!--                  <a-->
              <!--                    id="nextpage"-->
              <!--                    :class="{undisable: page1===total}"-->
              <!--                    href="#"-->
              <!--                    title-->
              <!--                    @click="nextPage(page1+1)">&gt;</a>-->
              <!--                  <a :class="{undisable: page1===total/limit}" title @click="nextPage(total/limit)">末</a>-->
              <!--                  <div class="clear"/>-->
              <!--                </div>-->
              <!--              </div>-->
              <!-- 公共分页 结束 -->
              <el-pagination
                :current-page="page1"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="limit"
                :page-count="total"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"/>
            </div>
            <!-- /问题列表 结束 -->
          </section>
        </div>
        <aside class="fl col-3">
          <div class="mt30 pl10">
            <section class="pt10">
              <a href="javascript:void(0)" title="我要提问" class="comm-btn c-btn-5" @click="toAddQuestions()">我要提问</a>
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
                      <p class="hLh20"><span class="c-999 f-fA">回答数</span></p></div>
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
    <!-- /提问题 结束 -->
    <el-drawer
      :visible.sync="publishQue"
      :with-header="true"
      :direction="direction"
      size="80%">
      <el-form :model="que" label-width="80px" size="mini" class="form-que">
        <el-form-item label="问题：">
          <el-input v-model="que.content" maxlength="1000" clearable type="textarea"/>
        </el-form-item>
        <el-form-item label="标签：">
          <el-select
            v-model="que.subjectId"
            :remote-method="queryTag"
            :loading="loading"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词">
            <el-option
              v-for="item in tag"
              :key="item.id"
              :label="item.title"
              :value="item.id"/>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button @click="onCancle">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
import commentApi from '~/api/comment'
import querystring from 'querystring'

export default {
  async asyncData(page) {
    const webCommentQueryVo = {}
    const query = page.route.query
    let page1 = query.page1
    let limit = query.limit
    console.log(limit)
    webCommentQueryVo.subjectId = query.subjectId || ''
    webCommentQueryVo.answerNumber = query.answerNumber || ''
    webCommentQueryVo.watchNumber = query.watchNumber || ''
    webCommentQueryVo.gmtCreate = query.gmtCreate || ''

    if (!limit) {
      limit = 5
    }
    if (!page1) {
      page1 = 1
    }
    console.log(limit)
    const commentListResponse = await commentApi.readQuestions(page1, limit, webCommentQueryVo)
    const commentList = commentListResponse.data.commentList
    const hotCommentList = commentListResponse.data.hotComments
    const tags = commentListResponse.data.tags

    let total = commentListResponse.data.total
    if (total === 0) {
      total = 1
    }
    return {
      commentList,
      total,
      webCommentQueryVo,
      hotCommentList,
      page1,
      tags,
      limit
    }
  },
  data() {
    return {
      loading: false,
      publishQue: false,
      direction: 'btt',
      que: {},
      tag: []
    }
  },
  methods: {
    searchAll(subjectId) {
      window.location = 'question?subjectId=' + subjectId
    },
    searchGmtCreate(i) {
      const queryObj = {
        subjectId: this.webCommentQueryVo.subjectId,
        gmtCreate: i
      }
      const querys = querystring.stringify(queryObj)
      // console.log(querys)
      window.location = 'question?' + querys
    },
    searchWatchNumber(i) {
      const queryObj = {
        subjectId: this.webCommentQueryVo.subjectId,
        watchNumber: i
      }
      const querys = querystring.stringify(queryObj)
      // console.log(querys)
      window.location = 'question?' + querys
    },
    searchAnswerNumber(i) {
      const queryObj = {
        subjectId: this.webCommentQueryVo.subjectId,
        answerNumber: i
      }
      const querys = querystring.stringify(queryObj)
      // console.log(querys)
      window.location = 'question?' + querys
    },
    prePage(i) {
      const queryObj = {
        page1: i,
        subjectId: { 1: this.webCommentQueryVo.subjectId },
        answerNumber: { 1: this.webCommentQueryVo.answerNumber },
        watchNumber: { 1: this.webCommentQueryVo.watchNumber },
        gmtCreate: { 1: this.webCommentQueryVo.gmtCreate }
      }
      const querys = querystring.stringify(queryObj)
      window.location = 'question?' + querys
    },
    toAddQuestions() {
      this.publishQue = true
    },
    queryTag(query) {
      this.loading = true
      commentApi.getLikeSubjectData(query).then(res => {
        this.tag = res.data.tag
        console.log(this.tag)
      })
      setTimeout(() => {
        this.loading = false
        this.tag = this.tag.filter(item => {
          return item.title.toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        })
      }, 200)
    },
    onSubmit() {
      if (this.tag.length === 0) {
        this.$message({
          message: '评论内容不能为空',
          type: 'error',
          duration: 1.5 * 1000
        })
      } else {
        console.log(this.que)
        this.que.status = 1
        commentApi.pulishComment(this.que).then(res => {
          if (res.code === 20000) {
            this.$message({
              message: res.message,
              type: 'success',
              duration: 1.5 * 1000
            })
          }
        })
      }
      console.log(this.que)
      this.que.content = ''
      // this.$router.push
    },
    onCancle() {
      this.publishQue = false
      this.que.content = ''
    },
    handleSizeChange(size) {
      console.log(this.limit)
      console.log('changePageSize:' + size)
      this.limit = size
      console.log(this.limit)
      this.pageCommon()
    },
    handleCurrentChange(page) {
      console.log('changeCurrentPage:' + page)
      this.page1 = page
      console.log(this.page1)
      this.pageCommon()
    },
    pageCommon() {
      const queryObj = {
        page1: this.page1,
        limit: this.limit,
        subjectId: { 1: this.webCommentQueryVo.subjectId },
        answerNumber: { 1: this.webCommentQueryVo.answerNumber },
        watchNumber: { 1: this.webCommentQueryVo.watchNumber },
        gmtCreate: { 1: this.webCommentQueryVo.gmtCreate }
      }
      const querys = querystring.stringify(queryObj)
      window.location = 'question?' + querys
    }
  }
}
</script>
