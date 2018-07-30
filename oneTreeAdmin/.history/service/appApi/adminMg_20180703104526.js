const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  // console.log(ctx.request.query)
  // ctx.body = ctx
  // { code: 200, message: 'success', status: 0, data: {
  //   name: 'admin', roles: 'admin'
  // }}
  const User = mongoose.model('Admin')
  await User.find().exec().then(async(result) => {
    // console.log(result)
    if (result) {
    //   // console.log(User)
    //   // 当用户名存在时，开始比对密码
    //   const newUser = new User() // 因为是实例方法，所以要new出对象，才能调用
    //   await newUser.comparePassword(password, result.password)
    //     .then((isMatch) => {
    //       // 返回比对结果
    //       ctx.body = { code: 200, message: isMatch, status: 0 }
    //     })
    //     .catch(error => {
    //       // 出现异常，返回异常
    //       // console.log(error)
    //       ctx.body = { code: 500, message: error, status: 500 }
    //     })
    } else {
      ctx.body = { code: 200, message: '没有数据' , status: 0 }
    }
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
