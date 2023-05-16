<template>
  <div class="col-7 fl">
    <h2>个人中心基本资料页面</h2>
    <el-form ref="member" :model="member" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="member.nickname"/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="member.mail"/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="member.mobile" disabled/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="member.password" disabled type="password"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="member.sex" placeholder="请选择活动区域">
          <el-option v-for="i in sex" :key="i.value" :label="i.label" :value="i.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="member.age" :min="1"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import memberApi from '~/api/member'
import cookie from 'js-cookie'

export default {
  data() {
    return {
      member: {},
      sex: [{
        label: '男',
        value: 1
      }, {
        label: '女',
        value: 2
      }]
    }
  },
  created() {
    memberApi.readMember().then(res => {
      this.member = res.data.member
      console.log(this.member)
    })
  },
  methods: {
    onSubmit() {
      memberApi.updateMember(this.member).then(res => {
        console.log(this.member)
        if (res.success === true) {
          this.$message.success(res.message)
          cookie.set('newcloud_jwt_token', res.data.token, { domain: 'localhost' })
        }
      })
    }
  }
}
</script>

