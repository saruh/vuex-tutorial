import { expect } from 'chai'
import { mutations } from 'src/vuex/store'

// ミューテーションの分割束縛
const { INCREMENT, DECREMENT } = mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    const state = { count: 0 }

    INCREMENT(state, 1)
    expect(state.count).to.equal(1)

    INCREMENT(state, '2')
    expect(state.count).to.equal(3)

    INCREMENT(state, '')
    expect(state.count).to.equal(3)
  })

  it('DECREMENT', () => {
    const state = { count: 0 }
    DECREMENT(state, 1)
    expect(state.count).to.equal(-1)

    DECREMENT(state, '2')
    expect(state.count).to.equal(-3)

    DECREMENT(state, '')
    expect(state.count).to.equal(-3)
  })
})
