<template>
  <div>
    <button id="count-ex-increment" @click='incrementCounter'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../../vuex/actions'
export default {
  vuex: {
    actions: {
      incrementCounter
    }
  }
}
</script>
