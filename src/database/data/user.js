var orm = require('orm')
var models = require('../models')
var DatabaseError = require('../../error/DatabaseError')
const CREATE = 'INSERT INTO ' + models.user
      + '(email, encrypted_password, created_at, updated_at) VALUES (?, ?, ?, ?)'
      + 'ON DUPLICATE KEY UPDATE updated_at = VALUES(updated_at)'

const SET_DELETE = 'UPDATE ' + models.user + ' SET deleted_at = ? WHERE id = ?'

var User = {
  props: {
    id: {type: 'integer', key: true},
    email: String,
    encrypted_password: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
  },

  findById: function (id) {
    return this.class.qFind({
      id: id,
      deleted_at: orm.eq(null)
    })
  },

  findByEmail: function (email) {
    var _this = this
    return new Promise(function (resolve, reject) {
      _this.class.find({
        email: email,
        deleted_at: orm.eq(null)
      }, function (err, user) {
        if (err && err.code === 2) {  // 'not found'
          resolve(null)
        } else if (err) {
          reject(new DatabaseError(err))
        } else {
          resolve(user)
        }
      })
    })
  },

  initialize: function (db) {
    this.db = db
    this.class = db.qDefine(models.user, this.props)
  },

  createOrUpdateStatus: function (email, encryptedPassword, createdAt) {
    return this.db.qExecQuery(CREATE,
      [email, encryptedPassword, createdAt, createdAt])
  },

  deleteById: function (id, deletedAt) {
    return this.db.qExecQuery(SET_DELETE,
    [deletedAt, id])
  }
}

module.exports = User
