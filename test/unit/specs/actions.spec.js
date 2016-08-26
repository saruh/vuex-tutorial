// actionsのテスト
//  mutationsのテストは別途行っているため
//  ここではactionを利用して、mutationに正しい情報が渡されるかを確認する

// inline loader のために require 構文を使用する
// inject-loader は、モック化された依存関係を注入できるようにする
// モジュールファクトリを返す
import { expect } from 'chai'

// モックによってモジュールを作成する
const actionsInjector = require('inject!src/vuex/actions')
const actions = actionsInjector({
/*
  // REFERENCE
  '../api/shop': {
    getProducts (cb) {
      setTimeout(() => {
        cb([ ])
      }, 100)
    }
  },

  // TODO
  '../api': {
    zip2address (cb, data) {
      require('fs').readFile('../sample_data/search.json', 'utf8', function (err, text) {
        msg = err ? err : text
        cb([ msg ])
      })
    }
  }
*/
})

// アクションが期待されるミューテーションを呼び出すかをテストするためのヘルパー
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // ディスパッチのモック
  const dispatch = (name, ...payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.name).to.equal(name)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }
  // モック化したストアと引数でactionを呼び出す
  action({dispatch, state}, ...args)

  // 呼び出されるべきmutationがない場合
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  it('incrementCounter', done => {
    testAction(actions.incrementCounter, [], {}, [
      { name: 'INCREMENT', payload: [ 1 ] }
    ], done)
  })

  it('decrementCounter', done => {
    testAction(actions.decrementCounter, [], {}, [
      { name: 'DECREMENT', payload: [ 1 ] }
    ], done)
  })

  it('incrementCounterAmount', done => {
    testAction(actions.incrementCounterAmount, [ 2 ], {}, [
      { name: 'INCREMENT', payload: [ 2 ] }
    ], done)
  })

  it('decrementCounterAmount', done => {
    testAction(actions.decrementCounterAmount, [ 2 ], {}, [
      { name: 'DECREMENT', payload: [ 2 ] }
    ], done)
  })
/*
// TODO
  it('searchAddress', done => {
    testAction(actions.searchAddress, [ {zipcode: '160-0022'} ], {}, [
      { name: 'DECREMENT', payload: [ '160-0022,新宿,新宿区,東京都,日本' ] }
    ], done)
  })
*/
})
