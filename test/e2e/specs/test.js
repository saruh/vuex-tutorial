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
    // console.log('browser', browser.options.desiredCapabilities.browserName)

    // chromeだと問題ないが、phantomjsだとwindowが小さすぎて
    // 大きい時にしか表示されないメニューのテストができないため
    // ウィンドウを最大化してから始める
    // 途中でリサイズしても、イベントが上がらないのか、メニューは表示されなかった
    browser
    .maximizeWindow()

    browser
    .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
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
      .click('#menu-login')
        .assert.urlContains('/login')
        .assert.title('Login')
      .click('#menu-chat')
        .assert.urlContains('/chat')
        .assert.title('Chat')

    browser
      .click('body > div.mdl-layout__container > div > header > div.mdl-layout__drawer-button')
      .click('#s-menu-count')
        .assert.urlContains('/count')
        .assert.title('Count')
      .click('#s-menu-count-ex')
        .assert.urlContains('/count-ex')
        .assert.title('CountEx')
      .click('#s-menu-search')
        .assert.urlContains('/search')
        .assert.title('Search')
      .click('#s-menu-dialog')
        .assert.urlContains('/dialog')
        .assert.title('Dialog')
      .click('#s-menu-login')
        .assert.urlContains('/login')
        .assert.title('Login')
      .click('#s-menu-chat')
        .assert.urlContains('/chat')
        .assert.title('Chat')
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
      .pause(3000)
      .expect.element('#search-result').text.to.equal('160-0022,新宿,新宿区,東京都,日本')

    browser
      .clearValue('#zipcode')
      .setValue('#zipcode', '160-0021')
      .click('button[type=submit]')
      .pause(3000)
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
  },

  '/login': function (browser) {
    browser
    .url('http://localhost:8080/login')
      .assert.elementCount('input', 3)
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .assert.elementPresent('input[type=submit]')
      .expect.element('input[type="submit"]').value.to.equal('ログイン')

    browser
      .setValue('#email', 'test@sample.xxx')
      .setValue('#password', 'password')
      .click('input[type="submit"]')
      .pause(1000)
      .expect.element('input[type="submit"]').value.to.equal('ログアウト')

    browser
      .click('input[type="submit"]')
      .pause(1000)
      .expect.element('input[type="submit"]').value.to.equal('ログイン')

    browser
      .end()
  },

  '/chat': function (browser) {
    browser
    .url('http://localhost:8080/chat')
      .assert.elementCount('input', 2)
      .assert.elementPresent('#chat-text1')
      .assert.elementPresent('input[type=button]')
      .expect.element('body > div.mdl-layout__container > div > main > div > div > ul > li').to.not.be.present

    browser
      .setValue('#chat-text1', 'comment1')
      .click('input[type="button"]')
      .setValue('#chat-text1', 'comment2')
      .click('input[type="button"]')
      .setValue('#chat-text1', 'comment3')
      .click('input[type="button"]')
      .pause(1000)
      .assert.elementCount('body > div.mdl-layout__container > div > main > div > div > ul > li', 3)
      .expect.element('body > div.mdl-layout__container > div > main > div > div > ul > li:nth-child(2)').text.to.equal('comment2')

    browser
      .end()
  }
}
