import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { configRouter } from './route-config'

Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
configRouter(router)

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
/*
import store from './vuex/store'
const App = Vue.extend(Object.assign(require('./App.vue'), {
  store: store
}))
*/
router.start(App, 'app')

// TODO: 本当はコンポーネントに直接アクセスしてきた場合でもtitleを変更したいのだが、
// うまくいく方法が見つからないので、一旦切り替え時のみ対応
router.afterEach(function (transition) {
  document.title = transition.to.title
})
