var qOrm = require('q-orm')

// models
var user = require('./data/user')

var database = {
  data: {},
  models: {
    user: user
  },
  connect: function () {
    qOrm.qConnect({
      host: 'localhost',
      database: 'sample',
      protocol: 'mysql',
      port: '3306',
      query: {
        debug: true,
        pool: true
      }
    })
    .then(function (db) {
      database.data = db
      user.initialize(db)
    })
    .catch(function (err) {
      console.log(err)
    })
  }
}

module.exports = database
