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
            <section v-if="article.length===0" class="no-data-wrap">
              <em class="icon30 no-data-ico">&nbsp;</em>
              <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
            </section>
            <!-- /无数据提示 结束-->
            <article v-else class="i-article-list">
              <!-- /文章列表 开始-->
              <ul>
                <li v-for="i in article" :key="i.id">
                  <aside class="i-article-pic">
                    <img :src="i.img" alt="">
                  </aside>
                  <h3 class="hLh30 txtOf">
                    <a :href="'/article/'+i.id" :title="i.articleName" class="i-art-title">{{ i.articleName }}</a>
                  </h3>
                  <section class="i-q-txt mt5 i-q-txt2">
                    <p>
                      <span class="c-999 f-fA">{{ i.content }}</span>
                    </p>
                  </section>
                  <section class="hLh30 txtOf mt5 pr10 a-list-extrainfo">
                    <span class="fr"><tt class="c-999 f-fM">{{ i.gmtCreate }}</tt></span>
                    <div class="fl">
                      <span> <a class="noter-dy vam" title="回答" >
                        <em class="icon18">&nbsp;</em>(<span>{{ i.answerNumber }}</span>)
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise13_3 praiseCount">{{ i.goodNumber }}</span>)
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
                <li v-for="(hot,index) in hotArticle" :key="hot.id">
                  <aside class="orderNum"><span>{{ index+1 }}</span></aside>
                  <h3 class="hLh30 txtOf">
                    <a :href="'/article/'+hot.id" title="" class="i-art-title">{{ hot.articleName }}</a>
                  </h3>
                  <section class="hLh30 txtOf mt5">
                    <div class="fr">
                      <span> <a class="noter-dy vam" title="回答">
                        <em class="icon18">&nbsp;</em>({{ hot.answerNumber }})
                      </a> <tt title="赞一下" class="noter-zan vam ml10 f-fM">
                        <em class="icon18">&nbsp;</em>(<span class="addPraise14_3 praiseCount">{{ hot.goodNumber }}</span>)
                      </tt>
                      </span>
                    </div>
                    <span class="fl"><tt class="c-999 f-fM">{{ hot.gmtCreate }}</tt></span>
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
import articleApi from '~/api/article'

export default {
  data() {
    return {
      page: 1,
      limit: 5,
      total: 0,
      article: [],
      hotArticle: []
    }
  },
  created() {
    this.searchArticle()
    this.searchHotArticle()
  },
  methods: {
    searchArticle() {
      articleApi.readAllArticle(this.page, this.limit).then(res => {
        this.article = res.data.article
        this.total = res.data.total
        console.log(this.article)
        console.log(this.total)
      })
    },
    searchHotArticle() {
      articleApi.readHotArticles().then(res => {
        this.hotArticle = res.data.hotArticle
        console.log(this.article)
      })
    },
    // 每页记录数改变，size：回调参数，表示当前选中的“每页条数”
    changePageSize(size) {
      this.limit = size
      this.searchArticle()
    },

    // 改变页码，page：回调参数，表示当前选中的“页码”
    changeCurrentPage(page) {
      this.page = page
      this.searchArticle()
    }
  }
}
</script>
