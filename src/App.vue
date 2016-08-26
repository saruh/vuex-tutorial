<template>
  <div>
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
    <Fluctuation></Fluctuation>
  </div>
</template>

<script>
import Display from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
import Fluctuation from './components/Fluctuation.vue'
import store from './vuex/store' // 作成したストアをインポートします。

export default {
  components: {
    Display,
    Increment,
    Decrement,
    Fluctuation
  },
  store // このコンポーネントとすべての子孫コンポーネントからストアを使用できるようにします。
}
</script>