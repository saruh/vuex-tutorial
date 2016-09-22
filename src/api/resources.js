import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// REF: https://github.com/vuejs/vue-resource/blob/master/docs/http.md
// アプリケーションコード -> リクエスト前処理 -> 外部API -> レスポンス前処理 -> アプリケーションコード
Vue.http.interceptors.push((request, next) => {
  // preprocessing: request
  console.log('request:', request)

  // postで送るデータをカッコのついた形{}から&の形に変える（apiサーバ側が対応していない場合の対応）
  // ※AddressResourceは対応されているのでこの設定は不要
  // 現在のLoginResourceは、これがないとLogin時にサーバ側（passport）で「Missing credentials」が発生する
  request.emulateJSON = true

  // postprocessing: response
  next((response) => {
    console.log('response:', response)
  })
})

export const AddressResource = Vue.resource('https://maps.googleapis.com/maps/api/geocode/json')
export const LoginResource = Vue.resource('/server-program/login')
export const LogoutResource = Vue.resource('/server-program/logout')
