<style>
.row {
  margin: 10px 0;
}
</style>

<template>
  <div>
    <div class='row'>
        <span>Count is </span><span id="count-value">{{ counterValue }}</span>
    </div>
    <div class='row'>
        <button id="count-increment" @click='incrementCounter' class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Increment +1</button>
        <button id="count-decrement" @click='decrementCounter' class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Decrement -1</button>
    </div>
    <div class='row'>
        <input id='count-amount' v-model='num' type="text">
        <button id="count-increment-amount" @click='increment' class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Increment +?</button>
        <button id="count-decrement-amount" @click='decrement' class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Decrement -?</button>
    </div>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters'
import {
  incrementCounter,
  decrementCounter,
  incrementCounterAmount,
  decrementCounterAmount
} from '../vuex/actions'

export default {
  data: function () {
    return {
      num: 2
    }
  },
  vuex: {
    getters: {
      counterValue: getCount
    },
    actions: {
      incrementCounter,
      decrementCounter,
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
