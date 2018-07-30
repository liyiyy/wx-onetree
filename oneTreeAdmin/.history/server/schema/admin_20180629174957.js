const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 声明Schema
const ObjectId = Schema.Types.ObjectId // 声明Object类型

// 创建我们的用户Schema
const adminSchema = new Schema({
  UserId: ObjectId,
  username: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }

})

// 发布模型
mongoose.model('User', adminSchema)

// const Router = require('koa-router')
// const mongoose = require('mongoose')
// const router = new Router()

// router.post('/register', async(ctx) => {
//   // 取得Model
//   // var registerUser = ctx.request.body;
//   // console.log(registerUser)
//   const User = mongoose.model('Admin')
//   // 把从前端接收的POST数据封装成一个新的user对象
//   const newUser = new User(ctx.request.body)
//   // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
//   await newUser.save().then(() => {
//     // 成功返回code=200，并返回成功信息
//     ctx.body = {
//       code: 200,
//       message: '注册成功'
//     }
//   }).catch(error => {
//     console.log(error)
//     // 失败返回code=500，并返回错误信息
//     ctx.body = {
//       code: 500,
//       message: error
//     }
//   })
// })

// /* 登录的实践 */
// // router.post('/login', async(ctx) => {
// //   // 得到前端传递过来的数据
// //   const loginUser = ctx.request.body
// //   // console.log(loginUser)
// //   const userName = loginUser.userName
// //   const password = loginUser.password
// //   // 引入User的model
// //   const User = mongoose.model('User')
// //   // 查找用户名是否存在，如果存在开始比对密码
// //   await User.findOne({ userName: userName }).exec().then(async(result) => {
// //     // console.log(result)
// //     if (result) {
// //       // console.log(User)
// //       // 当用户名存在时，开始比对密码
// //       const newUser = new User() // 因为是实例方法，所以要new出对象，才能调用
// //       await newUser.comparePassword(password, result.password)
// //         .then((isMatch) => {
// //           // 返回比对结果
// //           ctx.body = { code: 200, message: isMatch }
// //         })
// //         .catch(error => {
// //           // 出现异常，返回异常
// //           // console.log(error)
// //           ctx.body = { code: 500, message: error }
// //         })
// //     } else {
// //       ctx.body = { code: 200, message: '用户名不存在' }
// //     }
// //   }).catch(error => {
// //     console.log(error)
// //     ctx.body = { code: 500, message: error }
// //   })
// // })
// module.exports = router
