<style>
.router-view {
  padding: 10px;
  background-color: #a2ec9c;
}
</style>

<template>
  <ul>
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-icon">play_circle_outline</i>
        <a v-link="{ path: '/count' }">Go to Count</a>
      </span>
    </li>
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-icon">play_circle_outline</i>
        <a v-link="{ path: '/count-ex' }">Go to CountEx</a>
      </span>
    </li>
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-icon">play_circle_outline</i>
        <a v-link="{ path: '/search' }">Go to Search</a>
      </span>
    </li>
    <li class="mdl-list__item">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-icon">play_circle_outline</i>
        <a v-link="{ path: '/dialog' }">Go to Dialog</a>
      </span>
    </li>
  </ul>
  <div class='router-view'>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store
}
</script>