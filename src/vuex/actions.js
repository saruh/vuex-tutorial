// アクションは1番目の引数にストアを受け取ります。
// 私達はディスパッチ（と時にはステートにも）のみに興味を持っているため、
// ES6 の分割束縛（destructuring）機能を使用して、これらの2つのパラメータを取得することもできます。
// export const incrementCounter = function ({ dispatch, state }) {
//   dispatch('INCREMENT', 1)
// }
// export const decrementCounter = function ({ dispatch, state }) {
//   dispatch('DECREMENT', 1)
// }
// export const incrementCounterAmount = function ({ dispatch, state }, amount = 1) {
//   dispatch('INCREMENT', amount)
// }
// export const decrementCounterAmount = function ({ dispatch, state }, amount = 1) {
//   dispatch('DECREMENT', amount)
// }
export const incrementCounter = ({ dispatch, state }) => dispatch('INCREMENT', 1)
export const decrementCounter = ({ dispatch, state }) => dispatch('DECREMENT', 1)
export const incrementCounterAmount = ({ dispatch, state }, amount = 1) => dispatch('INCREMENT', amount)
export const decrementCounterAmount = ({ dispatch, state }, amount = 1) => dispatch('DECREMENT', amount)

