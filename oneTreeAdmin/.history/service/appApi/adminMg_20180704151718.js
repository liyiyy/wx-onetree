const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  const req_query = ctx.request.query
  const username = req_query.username
  var reg = new RegExp(username)
  console.log(req_query)
  const User = mongoose.model('Admin')
  await User.find({ username: username }).exec().then(async(result) => {
    ctx.body = { code: 200, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

// router.get('/delAdminUser', async(ctx) => {
//   const User = mongoose.model('Admin')
//   await User.find().exec().then(async(result) => {
//     // console.log(result)
//     ctx.body = { code: 200, message: 'success', status: 0, data: result }
//   }).catch(error => {
//     console.log(error)
//     ctx.body = { code: 500, message: error }
//   })
// })

router.post('/addAdminUser', async(ctx) => {
  // console.log(ctx.request.body)
  // 取得Model
  const Admin = mongoose.model('Admin')
  // 把从前端接收的POST数据封装成一个新的user对象
  const newUser = new Admin(ctx.request.body)
  // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
  await newUser.save().then((res) => {
    // console.log(res)
    // 成功返回code=200，并返回成功信息
    ctx.body = {
      code: 200,
      message: '注册成功',
      status: 0,
      data: res
    }
  }).catch(error => {
    // 失败返回code=500，并返回错误信息
    ctx.body = {
      code: 500,
      message: error
    }
  })
})

module.exports = router
