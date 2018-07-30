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
// var formidable = require('koa-formidable')
// const fs = require('fs')
// var http = require('http')
// var AVATAR_UPLOAD_FOLDER = '/imgs/'
// var hostname = 'http://localhost'
// var port = '1122'
// var url = 'url'
// var post = 'post'
router.post('/upload', async(ctx) => {
  const file = ctx.request.files.file
  console.log(ctx.req.headers)

  // var ctxs = JSON.stringify(ctx)

  // var form = formidable.parse(ctx.request)
  // var p = new Promise((resolve, reject) => {
  //   form((opt, obj) => {
  //     var file = obj.files.file
  //     var filename = file.name
  //     var buffer = fs.readFileSync(file.path) // 读取文件,此时就可以上传了
  //     // ... 到这里就已经回到之前的步骤了,后面的http只需要在合适的地方返回promise就行了
  //     var opts = {
  //       // ...上面一样
  //       hostname: hostname,
  //       port: port,
  //       path: url,
  //       method: post,
  //       headers: {
  //         'Content-Length': buffer.length,
  //         'Connection': 'Keep-Alive'
  //         // ...其他一些参数
  //       }
  //     }
  //     http.request(opts, function(resp) {
  //       resp.setEncoding('utf8')
  //       resp.on('data', function(chunk) {
  //         body += chunk // 这个是上传的服务器返回的结果
  //       })
  //       resp.on('end', function() {
  //         try {
  //           var result = JSON.parse(body)
  //           return resolve(result) // 上传结束客户端返回
  //         } catch (e) {
  //           return reject(e)
  //         }
  //       })
  //     }).on('error', function(e) {
  //       return reject(e) // 出错后返回
  //     }).write(buffer) // http上次
  //       .end()
  //   })
  // })
  // var body = await p // 上面的promise返回
  // return ctx.body = body
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
