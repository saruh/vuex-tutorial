import Vue from 'vue'
import Vuex from 'vuex'

// Vuex を使うことを vue に知らせます。
Vue.use(Vuex)

// アプリケーションが起動した時のステート（初期状態）を
// 保持するためのオブジェクトを作ります。
const state = {
  // アプリケーションがスタートする時、カウントが 0 にセットされます。
  count: 0
}

// exportは本来不要だが、unitテストを行うため設定
export const mutations = {
  // ミューテーションは現在のステートを1番目の引数に受け取ります。
  // この関数内では任意の更新を行うことができます。
  INCREMENT (state, amount) {
    amount = parseInt(amount) || 0
    state.count += parseInt(amount)
  },
  DECREMENT (state, amount) {
    amount = parseInt(amount) || 0
    state.count -= parseInt(amount)
  }
}

// 初期状態とミューテーションを結合し、Vuex のストアを作成します。
// このストアは私達のアプリケーションへつなげることができます。
export default new Vuex.Store({
  state,
  mutations
})