<style>
.counter {
	background-color: #a2ec9c;
}
.search {
	background-color: #909090;
}
</style>

<template>
  <div class='counter'>
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
    <Fluctuation></Fluctuation>
  </div>
  <div class='search'>
    <Search></Search>
  </div>
</template>

<script>
import Display from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
import Fluctuation from './components/Fluctuation.vue'
import Search from './components/Search.vue'

import store from './vuex/store'

export default {
  components: {
    Display,
    Increment,
    Decrement,
    Fluctuation,
    Search
  },
  store // このコンポーネントとすべての子孫コンポーネントからストアを使用できるようにします。
}
</script>