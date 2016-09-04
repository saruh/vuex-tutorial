module.exports = {
  '/server-program/login': function (browser) {
    browser
    .url('http://localhost:8080/server-program/login')
      .waitForElementVisible('body', 1000)
      .assert.elementCount('input', 3)
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .assert.elementPresent('input[type=submit]')
      .assert.value('input[type="submit"]', 'ログイン')
      .setValue('input[type="text"]', 'test@sample.xxx')
      .setValue('input[type="password"]', 'password')
      .click('input[type="submit"]')
      .pause(1000)
      .assert.elementCount('input', 1)
      .assert.value('input[type="submit"]', 'ログアウト')
      .click('input[type="submit"]')
      .pause(1000)
      .assert.elementCount('input', 3)
      .assert.value('input[type="submit"]', 'ログイン')
      .end()
  }
}
