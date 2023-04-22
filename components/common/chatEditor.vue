<template>
  <div style="position: relative">
    <div class="chatIcon">
      <el-popover placement="top-start" width="400" trigger="click" class="emoBox">
        <div class="emotionList">
          <a v-for="(item,index) in faceList" :key="index" href="javascript:void(0);" class="emotionItem" @click="getEmo(index)">{{ item }}</a>
        </div>
        <el-button
          slot="reference"
          class="emotionSelect"
          icon="el-icon-thumb"
        />
      </el-popover>
    </div>
    <el-input
      id="textarea"
      v-model="message"
      class="chatText"
      resize="none"
      type="textarea"
      rows="3"
      @keyup.ctrl.enter.native="send(message)"/>
    <el-tooltip class="item" effect="dark" content="ctrl+enter发送" placement="bottom">
      <el-button type="primary" size="small" class="btn-chat" plain @click="send(message)">发送</el-button>
    </el-tooltip>
  </div>
</template>
<script>
const appData = require('../../utils/emo.json')
export default {
  data() {
    return {
      faceList: [],
      message: ''
    }
  },
  mounted() {
    for (const i in appData) {
      this.faceList.push(appData[i].char)
    }
  },
  methods: {
    send(message) {
      console.log(message)
      this.message = ''
    },
    getEmo(index) {
      var textArea = document.getElementById('textarea')
      function changeSelectedText(obj, str) {
        if (window.getSelection) {
          // 非IE浏览器
          textArea.setRangeText(str)
          // 在未选中文本的情况下，重新设置光标位置
          textArea.selectionStart += str.length
          textArea.focus()
        } else if (document.selection) {
          // IE浏览器
          obj.focus()
          var sel = document.selection.createRange()
          sel.text = str
        }
      }
      changeSelectedText(textArea, this.faceList[index])
      this.message = textArea.value// 要同步data中的数据
      // console.log(this.faceList[index]);
      return
    }
  }
}
</script>
<style scoped>
</style>
