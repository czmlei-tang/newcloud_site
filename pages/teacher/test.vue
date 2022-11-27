<template>

  <div>

    <div v-for="(teacher, index) in items" :key="index">
      <a href="#">{{ teacher.name }}</a>
    </div>

  </div>
</template>

<script>
import teacherApi from '~/api/teacher'
export default {

  // 服务器端渲染方案：
  // 异步数据获取：在前端服务器端执行
  asyncData() {
    return teacherApi.getList().then(response => {
      return {
        items: response.data.items
      }
    })
  }

// 客户端渲染方案
//   data() {
//     return {
//       items: []
//     }
//   },

//   created() {
//     teacherApi.getList().then(response => {
//       this.items = response.data.items
//     })
//   }

}
</script>
