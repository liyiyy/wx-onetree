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
var path = require('path')
var fs = require('fs')
// const koaBody = require('koa-body')
router.post('/upload', async(ctx) => {
  // console.log(ctx.req.headers)
  const data = ctx.request.body
  console.log(data)

  // const savePath = path.join(`./files`, data.name)
  // const reader = fs.createReadStream(data.path)
  // const writer = fs.createWriteStream(savePath)

  // const pro = new Promise((resolve, reject) => {
  //   var stream = reader.pipe(writer)

  //   stream.on('finish', function() {
  //     resolve(`http://当前服务器地址${data.name}`)
  //   })
  // })

  // ctx.response.body = await pro
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
