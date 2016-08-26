<template>
  <form action='#' @submit='search()'>
    <input v-model='zipcode'>
    <button type='submit'>Search</button>
  </form>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { getMessage } from '../vuex/getters'
import { searchAddress } from '../vuex/actions'
export default {
  // 初期値
  data: function () {
    return {
      zipcode: '160-0022'
    }
  },
  // vuex経由で処理
  vuex: {
    getters: {
      message: getMessage
    },
    actions: {
      searchAddress
    }
  },
  // 内部関数
  methods: {
    search () {
      this.searchAddress(this)
    }
  }
}
</script>
