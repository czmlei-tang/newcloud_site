<template>
  <div class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <section class="path-wrap txtOf hLh30">
              <a href="/index" title="首页" class="c-999 fsize14">首页</a>
              \
              <a href="/article" title="" class="c-999 fsize14">文章列表</a>
              \ <span class="c-333 fsize14">{{ article.articleName }}</span>
            </section>
            <article class="article-infor-box pr20">
              <h3 class="hLh30 txtOf">
                <span class="i-art-title">{{ article.articleName }}</span>
              </h3>
              <p v-html="article.content"/>
              <section class="hLh30 txtOf mt5 pb20 mreadnum">
                <div class="fr">
                  <span> <a class="noter-dy vam" title="评论" href="#i-art-comment">
                    <em class="icon18">&nbsp;</em>(<span class="totalResultComment">1</span>)
                  </a> <tt title="赞一下" onclick="addPraise('23',3)" class="noter-zan vam ml5 f-fM">
                    <em class="icon18">&nbsp;</em>(<span class="addPraise23_3 praiseCount">1</span>)
                  </tt>
                  </span>
                </div>
                <div class="fl pt3"><tt class="c-999 f-fM">
                  <!-- 1小时前发布 -->
                  {{ article.gmtCreate }}</tt>
                </div>
              </section>
              <div id="art-infor-body">
                <div>
                  <tt class="c-999 f-fM">
                    评论：<span class="totalResultComment">{{ article.answerNumber }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    点赞：<span class="addPraise23_3 praiseCount">{{ article.goodNumber }}</span>
                  </tt> <tt class="c-999 f-fM ml20">
                    阅读：<span class="clickNum">{{ article.viewNumber }}</span>
                  </tt>
                </div>
              </div>
              <section id="sharebutton" class="mt20 tac">
                <div class="bdsharebuttonbox clearfix disIb bdshare-button-style0-32" data-bd-bind="1561104766159">
                  <div class="pr disIb fl of">
                    <a
                      href="javascript:void(0)"
                      onclick="addActiclePraise('23',3)"
                      title=""
                      class="zan-icon dz-btn pr"/>
                    <div class="dz-num">
                      <span class="c-red fsize16">+1</span>
                    </div>
                  </div>
                  <a title="分享到微信" href="#" class="bds_weixin fl" data-cmd="weixin">
                    <em class="share-fir-icon icon30"/>
                  </a>
                  <a title="分享到新浪微博" href="#" class="bds_tsina fl" data-cmd="tsina"/>
                </div>
                <script>window._bd_share_config = {
                'common': {
                'bdSnsKey': {},
                'bdText': '',
                'bdMini': '2',
                'bdMiniList': false,
                'bdPic': '',
                'bdStyle': '0',
                'bdSize': '32'
                }, 'share': {}
                }
                with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)]</script>
              </section>
            </article>
            <!-- 文章评论 开始 -->
            <!--            <div class="mt30 pr20 mb50 commentHtml">-->
            <!--              <div>-->
            <!--                <h6 id="i-art-comment" class="c-c-content c-infor-title">-->
            <!--                  <span class="commentTitle">文章评论（1条）</span>-->
            <!--                </h6>-->
            <!--                <section class="lh-bj-list pr mt20 replyhtml">-->
            <!--                  <ul>-->
            <!--                    <li class="unBr">-->
            <!--                      <aside class="noter-pic">-->
            <!--                        <img width="50" height="50" class="picImg" src="~/assets/photo/customer/avatar-boy.gif">-->
            <!--                      </aside>-->
            <!--                      <div class="of">-->
            <!--                        <section class="n-reply-wrap">-->
            <!--                          <fieldset>-->
            <!--                            <textarea id="commentContent" name="" placeholder="输入您要评论的文字"/>-->
            <!--                          </fieldset>-->
            <!--                          <p class="of mt5 tar pl10 pr10">-->
            <!--                            <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"/></span>-->
            <!--                            <a href="javascript:addComment();" title="回复" class="lh-reply-btn">回复</a>-->
            <!--                          </p>-->
            <!--                        </section>-->
            <!--                      </div>-->
            <!--                    </li>-->
            <!--                  </ul>-->
            <!--                </section>-->
            <!--                <section class="">-->
            <!--                  <section class="question-list lh-bj-list pr">-->
            <!--                    <ul class="pr10">-->
            <!--                      <li>-->
            <!--                        <aside class="noter-pic">-->
            <!--                          <img width="50" height="50" class="picImg" src="~/assets/photo/customer/01.jpg">-->
            <!--                        </aside>-->
            <!--                        &lt;!&ndash;                        <div class="of">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <span class="fl">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            <font class="fsize12 c-blue">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              goddess</font>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <font class="fsize12 c-999 ml5">评论：</font></span>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        <div class="noter-txt mt5">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <p>雅思阅读</p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        <div class="of mt5">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <span class="fr"><font class="fsize12 c-999 ml5">2018/11/04 10:33</font></span> <span&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            class="fl"> <a&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              class="noter-dy vam"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              title="回复"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              href="javascript: void(0)"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              onclick="queryCommentReply('3')">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              <em class="icon18">&nbsp;</em>(<span class="replyCount3">0</span>)&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </a> <tt title="赞一下" class="noter-zan vam ml10" onclick="addPraise('3',4)">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              <em class="icon18">&nbsp;</em>(<span class="addPraise3_4 praiseCount">1</span>)&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </tt>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          </span>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        <div class="n-reply">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <section class="n-reply-wrap">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            <fieldset>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              <textarea name="" class="commentReplyMsgContent3"/>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </fieldset>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            <p class="of mt5 tar pl10 pr10">&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              <span class="fl"><tt class="c-red commentReplyMsg3"/></span>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                              <a&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                onclick="addCommentReply('3')"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                class="lh-reply-btn"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                title="回复"&ndash;&gt;-->
            <!--                        &lt;!&ndash;                                href="javascript: void(0)">回复</a>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                            </p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          </section>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                          <div class="mt10 pl10 pr10 pb10 commentReply3"/>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                        </div> &lt;!&ndash; /回复盒子 &ndash;&gt;&ndash;&gt;-->
            <!--                      </li>-->
            <!--                    </ul>-->
            <!--                  </section>-->
            <!--                </section>-->

            <!--                &lt;!&ndash; 公共分页 开始 &ndash;&gt;-->
            <!--                <div>-->
            <!--                  <div class="paging">-->
            <!--                    <a class="undisable" title>首</a>-->
            <!--                    <a id="backpage" class="undisable" href="#" title>&lt;</a>-->
            <!--                    <a href="#" title class="current undisable">1</a>-->
            <!--                    <a href="#" title>2</a>-->
            <!--                    <a id="nextpage" href="#" title>&gt;</a>-->
            <!--                    <a href="#" title>末</a>-->
            <!--                    <div class="clear"/>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--                &lt;!&ndash; 公共分页 结束 &ndash;&gt;-->

            <!--              </div>-->
            <!--            </div>-->
          </section>
        </div>
        <aside class="fl col-3 articleRecommend time">
          <div style="display: flex;flex-direction: row; align-items: center;justify-content: center">
            <NcTime/>
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /文章列表 结束 -->
  </div>
</template>
<script>
import NcTime from '../../components/common/ncTime'
import articleApi from '~/api/article'

export default {
  components: {
    NcTime
  },
  data() {
    return {
      article: {}
    }
  },
  created() {
    const id = this.$route.params.id
    articleApi.readArticle(id).then(res => {
      this.article = res.data.article
      console.log(this.article)
    })
  },
  methods: {}
}
</script>
<style scoped>
.time {
  margin-top: 500px;
}
</style>
