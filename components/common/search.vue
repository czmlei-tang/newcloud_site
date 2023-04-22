<template>
  <el-autocomplete
    v-model="friendQueryString"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    class="inline-input"
    placeholder="搜索"
    prefix-icon="el-icon-search"
    @select="handleSelect"
  />
</template>

<script>
export default {
  data() {
    return {
      friendQueryString: ''
    }
  },
  methods: {
    querySearch(queryString, cb) {
    },
    handleSelect() {}
  }
}
</script>

<style scoped>

</style>
