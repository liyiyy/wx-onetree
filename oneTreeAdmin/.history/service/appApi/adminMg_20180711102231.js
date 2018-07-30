const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

//  搜索、获取管理员用户列表
router.get('/list', async(ctx) => {
  const req_query = ctx.request.query
  const username = req_query.username
  var reg = new RegExp(username)
  const User = mongoose.model('Admin')
  await User.find({ username: { $regex: reg }}).limit(10).sort({ createAt: -1 }).exec().then(async(result) => {
    ctx.body = { code: 200, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

//  禁用

// 删除管理员用户
router.get('/delAdmin', async(ctx) => {
  const Admin = mongoose.model('Admin')
  const id = ctx.request.query.id
  await Admin.findByIdAndRemove(id).exec().then(async(result) => {
    ctx.body = { code: 0, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

router.get('/forbid', async(ctx) => {
  const Admin = mongoose.model('Admin')
  const id = ctx.request.query.id
  const forbid = ctx.request.query.forbid
  // var num = 0
  // if (forbid === 1) {
  //   num = 0
  // } else {
  //   num = 1
  // }
  await Admin.findByIdAndUpdate(id, { 'fields': { isforbid: 0 }, 'new': true }).exec().then(async(result) => {
    Admin.find().exec().then(res => {
      console.log(res)
    })
    ctx.body = { code: 0, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

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
