<template>
  <div>
    <h3>Count is </span><span id="count-ex-value">{{ counterValue }}</h3>
  </div>
</template>

<script>
import { getCount } from '../../vuex/getters'
export default {
  // storeから状態を取り出す
  vuex: {
    getters: {
      // `getCount()` のような値を渡すのではなく、関数自身を渡すことに注意してください
      counterValue: getCount
    }
  }
}
</script>
