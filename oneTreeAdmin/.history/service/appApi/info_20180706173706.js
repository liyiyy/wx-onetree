const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

// 获取轮播图的列表
router.get('/list', async(ctx) => {
  // const data = ctx.request.query
  // console.log(data)
  const Info = mongoose.model('Swiper')
  // var newInfo = new Info(data)
  await Info.find().exec().then(async(result) => {
    // console.log(result)
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
// const formidable = require('formidable')
var formidable = require('formidable')
var form = new formidable.IncomingForm()
// 临时目录
form.uploadDir = './upload/'
router.post('/upload', function(req, res, next) {
  form.parse(req, function(err, fields, files) {
    if (files.modal_file) {
      rename(files.modal_file.path, files.modal_file.name, 'preview')
      res.send({
        stats: 'success',
        data: []
      })
    }
  })
})
// router.post('/upload', async(ctx) => {
//   const data = ctx.request.body.data
//   const req = ctx.request

//   const form = new formidable.IncomingForm()
//   form.uploadDir = './imgs'
//   form.parse(req, function(err, fields, files) {
//     console.log('err' + err)
//     console.log('fields' + fields)
//     console.log('files' + files)
//   })
//   // // console.log(data)
//   // const Info = mongoose.model('Pic')
//   // var newInfo = new Info(data)
//   // await newInfo.save().then(async(result) => {
//   //   // console.log(result)
//   //   ctx.body = {
//   //     code: 0,
//   //     status: 0,
//   //     message: '保存了',
//   //     data: result
//   //   }
//   // })
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
