<template>
  <div v-if="login_status">
    <form method="post" action="#" @submit.stop.prevent='logout(this)'>
      ログイン中です。
      <input type="submit" value="ログアウト">
    </form>
  </div>
  <div v-else>
    <form method="post" action="#" @submit.stop.prevent='login(this)'>
      ID:
      <input id='email' v-model='email'>
      Password:
      <input type='password' id='password' v-model='password'>
      <input type='submit' value='ログイン'>
    </form>
  </div>
</template>

<script>
import { getLoginStatus } from '../vuex/getters'
import { login, logout } from '../vuex/actions'
export default {
  // 初期値
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  // vuex経由で処理
  vuex: {
    getters: {
      login_status: getLoginStatus
    },
    actions: {
      login,
      logout
    }
  }
}
</script>
