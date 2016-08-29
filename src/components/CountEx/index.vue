<style>
/*
.row {
  margin: 10px 0;
}
*/
</style>

<template>
  <div>
    <Display></Display>
    <Increment></Increment>
    <Decrement></Decrement>
    <Fluctuation></Fluctuation>
  </div>
</template>

<script>
/**/
import Display from './Display'
import Increment from './Increment'
import Decrement from './Decrement'
import Fluctuation from './Fluctuation'
/**/

export default {
  components: {
    Display,
    Increment,
    Decrement,
    Fluctuation
/*
    Display: require('./Display.vue'),
    Increment: require('./Increment.vue'),
    Decrement: require('./Decrement.vue'),
    Fluctuation: require('./Fluctuation.vue')
*/
  }
}
</script>
