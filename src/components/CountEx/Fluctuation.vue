<template>
  <div>
    <input v-model='num'>
    <button @click='increment'>Increment +?</button>
    <button @click='decrement'>Decrement -?</button>
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
