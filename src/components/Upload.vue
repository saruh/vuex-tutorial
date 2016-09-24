<template>
  <div v-if="file_path">
    <span id='file_path'>{{ file_path }}</span>
  </div>
  <div v-else>
    <form method="post" action="#">
      File:
      <input type='file' @change='fileChange'>
    </form>
  </div>
</template>

<script>
import { getUploadFilePath } from '../vuex/getters'
import { upload } from '../vuex/actions'
export default {
  // vuex経由で処理
  vuex: {
    getters: {
      file_path: getUploadFilePath
    },
    actions: {
      upload
    }
  },
  methods: {
    fileChange: function (e) {
      var formData = new FormData()
      formData.append('file', e.target.files[0])
      this.upload(formData)
    }
  }
}
</script>
