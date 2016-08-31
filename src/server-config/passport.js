// 参考
//   http://qiita.com/tinymouse/items/fa910bf80a038c7f9ccb
//   http://qiita.com/kayanonaka/items/14804e3e233f1402ba12
var app = module.parent.exports
var express = require('express')
var router = express.Router()

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

// mock
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
var getAccount = function (obj, cb) {
  return cb(null, {
    id: getRandomInt(10001, 99999),
    name: obj.name
  })
}

passport.use(new LocalStrategy(
  {
    usernameField: 'email',  // 入力フォームの項目名
    passwordField: 'password',  // 入力フォームの項目名
    passReqToCallback: true
  },
  function (req, username, password, cb) {
    getAccount({
      email: username,
      password: password
    }, function (err, account) {
      if (err) return cb(err, null)   // Error Code 500
      if (!account) return cb(null, false, {message: 'Missing email or password.'})   // req.flash('error')[0]
      return cb(null, account)
    })
  })
)

// passportのセッション管理
passport.serializeUser(function (account, cb) {
  cb(null, account)
})

passport.deserializeUser(function (account, cb) {
  cb(null, account)
})

// Expressで利用する場合は初期化が必要
// http://knimon-software.github.io/www.passportjs.org/guide/configure/
app.use(passport.initialize())
app.use(passport.session())

//
// ここから先はルータの設定
//
const prefix = '/server-program'

router.get('/login', function (req, res) {
  console.log(req.flash('error')[0])
  return res.render('login.ejs', {
    authorized: req.isAuthenticated()  // 認証済みかどうかの確認
  })
})

// 使い方
//   http://knimon-software.github.io/www.passportjs.org/guide/authenticate/
router.post('/login',
  passport.authenticate('local', {
    successRedirect: prefix + '/login',
    failureRedirect: prefix + '/login',
    failureFlash: true
  })
)

router.post('/logout', function (req, res) {
  req.logout()
  res.redirect(prefix + '/login')
})

app.use(prefix, router)

module.exports = passport
