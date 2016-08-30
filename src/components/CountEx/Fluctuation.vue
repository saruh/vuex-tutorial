<template>
  <div>
    <input id="count-ex-amount" v-model='num'>
    <button id="count-ex-increment-amount" @click='increment'>Increment +?</button>
    <button id="count-ex-decrement-amount" @click='decrement'>Decrement -?</button>
  </div>
</template>

<script>
import { incrementCounterAmount, decrementCounterAmount } from '../../vuex/actions'
export default {
  data: function () {
    return {
      num: 2
    }
  },
  vuex: {
    actions: {
      incrementCounterAmount,
      decrementCounterAmount
    }
  },
  methods: {
    increment () {
      this.incrementCounterAmount(this.num)
    },
    decrement () {
      this.decrementCounterAmount(this.num)
    }
  }
}
</script>
