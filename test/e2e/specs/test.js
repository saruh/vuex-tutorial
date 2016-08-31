// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// useXpathを1度使うと全体でxpathの指定が必須になるため
// 利用しない方が良さそう

// CountとCountExコンポーネントは同じ処理なので共有化
var commonCount = function (browser, name) {
  browser
  .url('http://localhost:8080/' + name)
    .assert.elementCount('button', 4)
    .assert.elementCount('input', 1)
    .assert.value('#' + name + '-amount', '2')
    .expect.element('#' + name + '-value').text.to.equal('0')

  browser
    .click('#' + name + '-increment')
    .expect.element('#' + name + '-value').text.to.equal('1')

  browser
    .click('#' + name + '-decrement')
    .expect.element('#' + name + '-value').text.to.equal('0')

  browser
    .clearValue('#' + name + '-amount')
    .setValue('#' + name + '-amount', '5')
    .assert.value('#' + name + '-amount', '5')
    .click('#' + name + '-increment-amount')
    .expect.element('#' + name + '-value').text.to.equal('5')

  browser
    .clearValue('#' + name + '-amount')
    .setValue('#' + name + '-amount', '100')
    .assert.value('#' + name + '-amount', '100')
    .click('#' + name + '-decrement-amount')
    .expect.element('#' + name + '-value').text.to.equal('-95')

  browser
    .end()
}

module.exports = {
  '/': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.containsText('a', 'Go to Count')
      .assert.elementCount('a', 4)
      .click('#menu-count')
      .assert.urlContains('/count')
      .assert.title('Count')
      .click('#menu-count-ex')
      .assert.urlContains('/count-ex')
      .assert.title('CountEx')
      .click('#menu-search')
      .assert.urlContains('/search')
      .assert.title('Search')
      .click('#menu-dialog')
      .assert.urlContains('/dialog')
      .assert.title('Dialog')
      .end()
  },

  '/count': function (browser) {
    commonCount(browser, 'count')
  },

  '/count-ex': function (browser) {
    commonCount(browser, 'count-ex')
  },

  '/search': function (browser) {
    browser
    .url('http://localhost:8080/search')
      .assert.elementCount('button', 1)
      .expect.element('#search-result').text.to.equal('')

    browser
      .click('button[type=submit]')
      .pause(1000)
      .expect.element('#search-result').text.to.equal('160-0022,新宿,新宿区,東京都,日本')

    browser
      .clearValue('#zipcode')
      .setValue('#zipcode', '160-0021')
      .click('button[type=submit]')
      .pause(1000)
      .expect.element('#search-result').text.to.equal('160-0021,歌舞伎町,新宿区,東京都,日本')

    browser
      .end()
  },

  '/dialog': function (browser) {
    browser
    .url('http://localhost:8080/dialog')
      .assert.elementCount('dialog', 1)
      .assert.elementCount('button', 2)
      .expect.element('dialog').to.not.have.attribute('open')

    browser
      .click('#dialog-open')
      .expect.element('dialog').to.have.attribute('open')

    browser
      .click('#dialog-close')
      .expect.element('dialog').to.not.have.attribute('open')

    browser
      .end()
  }
}
