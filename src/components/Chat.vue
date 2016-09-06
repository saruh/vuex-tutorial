<style>
  /*.chat-timeline { width: 320px !important; }*/
</style>

<template>
  <div>
    <ul class="mdl-list chat-timeline">
      <div v-for="msg in list" >
        <h3>
          {{ msg }}
        </h3>
      </div>
    </ul>
    <form action=# @submit.stop.prevent='sendText'>
      <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" v-model="message" type="text" id="chat-text1" tabindex="0">
          <label class="mdl-textfield__label" for="chat-text1">Text...</label>
      </div><input @click="sendText" type="button" class="mdl-button mdl-js-button " tabindex="0" value="post"></input>
    </form>
  </div>
</template>

<script>
import { getChatMsgs } from '../vuex/getters'
import { create, sendMessage } from '../vuex/socket-actions'

export default {
  created: function () {
    this.create()
  },
  props: {
    message: ''
  },
  methods: {
    addPost: function () {
      console.log('add post is clicked')
    },
    sendText: function () {
      if (!this.message) return
      this.sendMessage(this.message)
      this.message = ''
    }
  },
  watch: {
    message: function (value) {
      if (value) {
        console.log('message changed ' + value)
      }
    }
  },
  vuex: {
    getters: {
      list: getChatMsgs
    },
    actions: {
      create,
      sendMessage
    }
  }
}
</script>