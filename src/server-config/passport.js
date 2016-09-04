// 参考
//   http://qiita.com/tinymouse/items/fa910bf80a038c7f9ccb
//   http://qiita.com/kayanonaka/items/14804e3e233f1402ba12
var app = module.parent.exports
var passwordHash = require('password-hash')
var express = require('express')
var router = express.Router()

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var db = require('../database')

passport.use(new LocalStrategy(
  {
    usernameField: 'email',  // 入力フォームの項目名
    passwordField: 'password',  // 入力フォームの項目名
    passReqToCallback: true
  },
  function (req, username, password, cb) {
    db.data.models.user.find({
      email: username
    }, function (err, user) {
      if (err) return cb(err, null)   // Error Code 500
      if (!user) return cb(null, false, {message: 'Missing email.'})   // req.flash('error')[0]

      // 作成したパスワードのハッシュ値の計算方法は不明
      //   ex. require('password-hash').generate('password')
      //    ====> sha1$ee3acdd0$1$7d1f88e70d30f40df8a3d5947e1d6ccd24a66138
      //          アルゴリズム$salt$1(固定値)$ハッシュ値、だと想定したが、下記のように値が一致しなかった
      //          下記はopensslを使って確認してみた結果
      //   ex. password="password"; salt='ee3acdd0'; echo -n "$salt$password" |openssl dgst -sha1
      //    ====> b72c6e200602bde33737a25fb9d1a8863dfbef8f
      //          下記のサイトでも同じ結果が得られることから、やはり計算が異なっていると判断できる
      //          http://online-code-generator.com/sha1-hash-with-optional-salt.php
      //          プログラムを追えばわかると思うが、特に困ることもなさそうなので計算方法はあえて深追いしないことにする。
      if (passwordHash.verify(password, user[0].encrypted_password)) {
        user[0].encrypted_password = ''
        return cb(null, user[0])
      } else {
        return cb(null, false, {message: 'Missing password.'})
      }
    })
  })
)

// passportのセッション管理
passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (user, cb) {
  cb(null, user)
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
