<template>
  <div>
    <button id="count-ex-decrement" @click='decrementCounter'>Decrement -1</button>
  </div>
</template>

<script>
import { decrementCounter } from '../../vuex/actions'
export default {
  vuex: {
    actions: {
      decrementCounter
    }
  }
}
</script>
