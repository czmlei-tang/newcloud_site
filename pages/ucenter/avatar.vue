<template>
  <div>
    <div>
      个人头像修改：
    </div>
    <el-upload
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :on-error="handleAvatarError"
      :before-upload="beforeAvatarUpload"
      :action="BASE_API+'/admin/oss/file/upload?module=avatar'"
      aria-label="个人头像"
      class="avatar-uploader">
      <img v-if="member.avatar" :src="member.avatar" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"/>
    </el-upload>
  </div>
</template>

<script>
import memberApi from '~/api/member'
import cookie from 'js-cookie'

export default {
  name: 'Avatar',
  data() {
    return {
      member: {},
      BASE_API: 'http://127.0.0.1:9110'
    }
  },
  created() {
    memberApi.readMember().then(res => {
      this.member = res.data.member
    })
  },
  methods: {
    // 文件上传成功
    handleAvatarSuccess(response) {
      if (response.success) {
        this.member.avatar = response.data.url
        console.log(this.member.avatar)
        // 更新后端
        memberApi.updateMember(this.member).then(res => {
          if (res.success === true) {
            this.$message.success(res.message)
            cookie.set('newcloud_jwt_token', res.data.token, { domain: 'localhost' })
          }
        })
        // 强制重新渲染
        this.$forceUpdate()
      } else {
        this.$message.error('上传失败! （非20000）')
      }
    },

    // 文件上传失败（http）
    handleAvatarError() {
      this.$message.error('上传失败! （http失败）')
    },

    // 文件上传前的校验
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' // MIME
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

