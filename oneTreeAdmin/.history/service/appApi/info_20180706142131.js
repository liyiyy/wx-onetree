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
  // Swiper.remove({ id: id }, err => {
  //   if (err) {
  //     console.log('err')
  //   }
  // })
  Swiper.findByIdAndRemove(id, {}, function(err, res) {
    if (err) {
      console.log(err + '错误')
    } else {
      console.log(res + 'fanh')
    }
  })
// }
  // await Swiper.remove({ id: id }).exec().then(async(result) => {
  //   ctx.body = {
  //     code: 0,
  //     status: 0,
  //     message: '删除',
  //     data: result
  //   }
  // })
})

// 轮播图新增上传操作
router.get('/upload', async(ctx) => {
  const data = ctx.request.query
  // console.log(data)
  const Info = mongoose.model('Pic')
  var newInfo = new Info(data)
  await newInfo.save().then(async(result) => {
    // console.log(result)
    ctx.body = {
      code: 0,
      status: 0,
      message: '保存了',
      data: result
    }
  })
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
