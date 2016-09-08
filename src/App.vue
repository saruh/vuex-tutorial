<style>
main {
  padding: 10px;
  background-color: #ebf5e9;
}
</style>

<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Menu></Menu>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from './components/Menu'
import store from './vuex/store'

export default {
  store,
  components: {
    Menu
  }
}
</script>