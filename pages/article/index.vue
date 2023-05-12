<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <section class="i-article">
        <div class="fl col-7">
          <section class="mr30">
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <!-- /无数据提示 开始-->
            <section class="no-data-wrap">
              <em class="icon30 no-data-ico">&nbsp;</em>
              <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
            </section>
            <!-- /无数据提示 结束-->
            <article class="i-article-list">
              <!-- /文章列表 开始-->
              <ul>
                <li>
                  <aside class="i-article-pic">
                    <img src="~/assets/photo/article/09.jpg" alt="法国总理证实失事客机无人生还">
                  </aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="法国总理证实失事客机无人生还" class="i-art-title">法国总理证实失事客机无人生还</a>
                  </h3>
                  <section class="i-q-txt mt5 i-q-txt2">
                    <p>
                      <span class="c-999 f-fA">据美国《华盛顿邮报》3月24日报道，法国总理瓦尔斯称，一架直升机已尝试降落在坠毁地点附近，并未发现失事客机上有生还者</span>
                    </p>
                  </section>
                  <section class="hLh30 txtOf mt5 pr10 a-list-extrainfo">
                    <span class="fr"><tt class="c-999 f-fM">2018-09-09 10:08</tt></span>
                    <div class="fl">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/13.html">
                        <em class="icon18">&nbsp;</em>(<span>0</span>)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('13',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise13_3 praiseCount">0</span>)
                      </tt>
                      </span>
                    </div>
                  </section>
                </li>
              </ul>
              <!-- /文章列表 结束-->
            </article>

            <!-- 公共分页 开始 -->
            <!-- 分页组件 -->
            <el-pagination
              :current-page="page"
              :total="total"
              :page-size="limit"
              :page-sizes="[5, 10, 20]"
              style="padding: 30px 0; text-align: center"
              layout="sizes, prev, pager, next, jumper, ->, total"
              @current-change="changeCurrentPage"
              @size-change="changePageSize"/>
              <!-- 公共分页 结束 -->
          </section>
        </div>

        <!-- 好文推荐 -->
        <aside class="fl col-3 articleRecommend">
          <div>
            <header class="comm-title all-article-title">
              <h2 class="fl tac">
                <span class="c-333">文章排行榜</span>
              </h2>
              <section class="c-tab-title">
                <a href="javascript: void(0)">&nbsp;</a>
              </section>
            </header>
            <section class="i-article-list r-art-wrap">
              <ul>
                <li>
                  <aside class="orderNum"><span>5</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a href="/article/1" title="背水一战的任天堂" class="i-art-title">背水一战的任天堂</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答" href="http://127.0.0.1:81/front/articleinfo/14.html">
                        <em class="icon18">&nbsp;</em>(0)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM" onclick="addPraise('14',3)">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise14_3 praiseCount">0</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">2018-09-09 10:08</tt></span>
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </aside>
        <div class="clear"/>
      </section>
    </section>
    <!-- /文章列表 结束 -->
  </div>
</template>

<script>
// import articleApi from '~/api/article'

export default {
  // 服务器端渲染方案：
  // 异步数据获取：在前端服务器端执行
  // asyncData() {
  //   return articleApi.getArticleExpress.then(res => {
  //     re
  //   })
  // }
}
</script>
