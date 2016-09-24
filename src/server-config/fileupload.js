// 参考
//   https://www.npmjs.com/package/multer
var app = module.parent.exports
var express = require('express')
var router = express.Router()

var multer = require('multer')

// The disk storage engine gives you full control on storing files to disk.
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    var filename = file.originalname
    var fileExtension = filename.split(".")[1]
    cb(null, Date.now() + "." + fileExtension)
  }
})

var upload = multer({storage: storage})

// module.exportsの設定は不要だと思うので一旦コメント
// module.exports = upload

//
// ここから先はルータの設定
//
const prefix = '/upload'

// this route processes the upload request, see below upload.single('file') 
// is the passed multer
router.post('/', upload.single('file'), function(req, res){
  // TODO: save user.thumbs
  res.send({
    file_path: req.file.path
  })
})

app.use(prefix, router)
