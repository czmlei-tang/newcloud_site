<template>
  <div style="display: flex;flex-direction: column;height: 500px;justify-content: space-between;">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"/>
      <el-step title="步骤 2"/>
      <el-step title="步骤 3"/>
    </el-steps>
    <el-form v-if="active===0" ref="form" :model="form" label-width="80px">
      <el-form-item label="原始密码">
        <el-input v-model="form.originallyPassword" placeholder="请输入原始密码" show-password/>
      </el-form-item>
    </el-form>
    <el-form v-if="active===1" ref="form" :model="form" label-width="80px">
      <el-form-item label="原始密码">
        <el-input v-model="form.originallyPassword" placeholder="请输入原始密码" show-password/>
      </el-form-item>
    </el-form>
    <el-form v-if="active===2" ref="form" :model="form" label-width="80px">
      <el-form-item label="最新密码">
        <el-input v-model="form.password" max="80px" placeholder="请输入最新密码" show-password/>
      </el-form-item>
    </el-form>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
import memberApi from '~/api/member'
import md5 from 'js-md5'
import cookie from 'js-cookie' // 引入

export default {
  name: 'Password',
  data() {
    return {
      active: 0,
      form: {
        originallyPassword: '',
        password: ''
      }
    }
  },
  methods: {
    next() {
      switch (this.active) {
        case 0:
          this.checkOldPassword()
          break
        case 1:
          this.checkOldPassword()
          break
        case 2:
          this.updatePassword()
          break
      }
    },
    checkOldPassword() {
      memberApi.checkOldPassword(md5(this.form.originallyPassword)).then(res => {
        if (res.success === true) {
          this.$message.success(res.message)
          if (this.active++ > 2) this.active = 0
          this.form.originallyPassword = ''
        } else {
          this.$message.error(res.message)
        }
      })
    },
    updatePassword() {
      this.$alert('密码修改后，您将会退出重新登录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        callback: action => {
          memberApi.updatePassword(md5(this.form.password)).then(res => {
            if (res.success === true) {
              this.logout()
            } else {
              this.$message.error(res.message)
            }
          })
        }
      })
    },
    logout() {
      // 清除cookie
      cookie.set('newcloud_jwt_token', '', { domain: 'localhost' })
      // 跳转页面
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>

</style>
