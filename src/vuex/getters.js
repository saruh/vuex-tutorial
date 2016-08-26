// このゲッターはただカウントを返すだけの関数です。
// ES6 では以下のようにも書けます。
// export const getCount = state => state.count

export function getCount (state) {
  return state.count
}
