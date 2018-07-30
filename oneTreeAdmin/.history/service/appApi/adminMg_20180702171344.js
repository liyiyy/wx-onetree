const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  // console.log(ctx.request.body)
  // ctx.body = { code: 200, message: 'success', status: 0, data: {
  //   name: 'admin', roles: 'admin'
  // }}
})

router.post('/addAdminUser', async(ctx) => {
  console.log(ctx.request.body)
  // 取得Model
  const Admin = mongoose.model('Admin')
  // 把从前端接收的POST数据封装成一个新的user对象
  const newUser = new Admin(ctx.request.body)
  // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
  await newUser.save().then(() => {
    // 成功返回code=200，并返回成功信息
    ctx.body = {
      code: 200,
      message: '注册成功'
    }
  }).catch(error => {
    // 失败返回code=500，并返回错误信息
    ctx.body = {
      code: 500,
      message: error
    }
  })
  // ctx.body = { code: 200, message: 'success', status: 0, data: {
  //   name: 'admin', roles: 'admin'
  // }}
})

module.exports = router
