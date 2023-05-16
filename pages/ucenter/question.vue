<template>
  <div style="display: flex;flex-direction: column;justify-content: space-around;">
    <el-table
      v-if="questions.length>0"
      :data="questions"
      style="width: 700px;margin-left: 50px"
      max-height="600">
      <el-table-column
        prop="content"
        show-overflow-tooltip
        label="提问内容"
        width="150"/>
      <el-table-column
        prop="subject"
        label="问题类型"
        width="120"/>
      <el-table-column
        prop="goodNumber"
        label="点赞数"
        width="120"/>
      <el-table-column
        prop="answerNumber"
        label="回答数"
        width="120"/>
      <el-table-column
        prop="watchNumber"
        label="浏览数"
        width="120"/>
      <el-table-column
        prop="gmtCreate"
        label="提问时间"
        width="300"/>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="view(scope.$index, questions)">
            查看
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index, questions)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <section v-else class="no-data-wrap">
      <em class="icon30 no-data-ico">&nbsp;</em> <span
        class="c-666 fsize14 ml10 vam">暂无数据，快去提问吧</span>
    </section>
  </div>
</template>

<script>
import questionApi from '../../api/question'
import commentApi from '../../api/comment'
export default {
  name: 'Question',
  data() {
    return {
      questions: []
    }
  },
  created() {
    this.getMyQuestions()
  },
  methods: {
    deleteRow(index, rows) {
      this.$confirm('此操作将永久删除该提问, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        commentApi.removeComment(rows[index].id).then(res => {
          if (res.success) {
            this.$message.success(res.message)
          }
        })
        this.getMyQuestions()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getMyQuestions() {
      questionApi.getQuestions().then(res => {
        this.questions = res.data.questions
      })
    },
    view(index, rows) {
      window.location = '/question/' + rows[index].id
    }
  }
}
</script>
<style scoped>

</style>
