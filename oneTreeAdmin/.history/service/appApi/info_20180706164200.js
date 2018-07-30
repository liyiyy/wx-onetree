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
const formidable = require('formidable')

router.post('/upload', async(ctx) => {
  const data = ctx.request.body.data

  const form = new formidable.IncomingForm()
  form.uploadDir = './imgs'
  form
    .on('error', function(err) {
      console.log(err) //各种错误
    })
  // POST 普通数据 不包含文件 field 表单name value 表单value
    .on('field', function(field, value) {
      if (form.type == 'multipart') { // 有文件上传时 enctype="multipart/form-data"
        if (field in post) { // 同名表单 checkbox 返回array 同get处理
          if (util.isArray(post[field]) === false) {
            post[field] = [post[field]]
                }
          post[field].push(value)
                return;
        }
      }
      post[field] = value
    })
    .on('file', function(field, file) { // 上传文件
      file[field] = file
    })
    .on('end', function() {
      fn() //解析完毕 做其他work
    })
  form.parse(data, function(err, fields, files) {
    console.log('err' + err)
    console.log('fields' + fields)
    console.log('files' + files)
  })
  // // console.log(data)
  // const Info = mongoose.model('Pic')
  // var newInfo = new Info(data)
  // await newInfo.save().then(async(result) => {
  //   // console.log(result)
  //   ctx.body = {
  //     code: 0,
  //     status: 0,
  //     message: '保存了',
  //     data: result
  //   }
  // })
})

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
