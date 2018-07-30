const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

// 获取轮播图的列表
router.get('/list', async(ctx) => {
  const Info = mongoose.model('Swiper')
  await Info.find().exec().then(async(result) => {
    ctx.body = {
      code: 0,
      status: 0,
      message: '保存了',
      data: result
    }
  })
})

// 删除一条轮播图的数据
router.get('/del', async(ctx) => {
  const id = ctx.request.query.id
  const Swiper = mongoose.model('Swiper')
  await Swiper.findByIdAndRemove(id).exec().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: '删除了',
      data: result
    }
  })
})

// 轮播图新增上传操作
var formidable = require('formidable')
var AVATAR_UPLOAD_FOLDER = '/imgs/'
router.post('/upload', async(ctx) => {
  // var req = ctx.request
  // var res = ctx.response
  // console.log(req);
  // console.log(res);

  var form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER
  form.keepExtensions = true
  form.maxFieldsSize = 2 * 1024 * 1024
  form.parse(req, function(err, fields, files) {
    if (err) {
      res.locals.error = err
      res.render('index', { title: TITLE })
      return
    }

    var extName = '' // 后缀名
    switch (files.fulAvatar.type) {
      case 'image/pjpeg':
        extName = 'jpg'
        break
      case 'image/jpeg':
        extName = 'jpg'
        break
      case 'image/png':
        extName = 'png'
        break
      case 'image/x-png':
        extName = 'png'
        break
    }

    if (extName.length == 0) {
      res.locals.error = '只支持png和jpg格式图片'
      res.render('index', { title: TITLE })
      return
    }

    var avatarName = Math.random() + '.' + extName
    var newPath = form.uploadDir + avatarName
    fs.renameSync(files.fulAvatar.path, newPath) // 重命名
  })

  res.locals.success = '上传成功'
  res.render('index', { title: TITLE })
})

// router.post('/upload', async(ctx) => {
//   const data = ctx.request.body
//   const Info = mongoose.model('Pic')
//   var newInfo = new Info(data)
//   await newInfo.save().then(async(result) => {
//     ctx.body = {
//       code: 0,
//       status: 0,
//       message: '保存了',
//       data: result
//     }
//   })
// })

router.get('/addswiper', async(ctx) => {
  const data = ctx.request.query
  // console.log(data)
  const Swiper = mongoose.model('Swiper')
  var newSwiper = new Swiper(data)
  await newSwiper.save().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: '保存了',
      data: result
    }
  })
})

module.exports = router
