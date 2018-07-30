const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')
router.post('/login', async(ctx) => {
  // 得到前端传递过来的数据
  const loginUser = ctx.request.body
  console.log(loginUser)
  const username = loginUser.username
  const password = loginUser.password
  // 引入User的model
  const User = mongoose.model('Admin')
  // 查找用户名是否存在，如果存在开始比对密码
  await User.findOne({ userName: username }).exec().then(async(result) => {
    console.log(result)
    if (result) {
      // console.log(User)
      // 当用户名存在时，开始比对密码
      const newUser = new User() // 因为是实例方法，所以要new出对象，才能调用
      await newUser.comparePassword(password, result.password)
        .then((isMatch) => {
          // 返回比对结果
          ctx.body = { code: 200, message: isMatch }
        })
        .catch(error => {
          // 出现异常，返回异常
          console.log(error)
          ctx.body = { code: 500, message: error }
        })
    } else {
      ctx.body = { code: 200, message: '用户名不存在' }
    }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})
router.post('/register', async(ctx) => {
  ctx.body = '用户注册接口'
})
module.exports = router
