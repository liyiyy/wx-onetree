const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 声明Schema
const ObjectId = Schema.Types.ObjectId // 声明Object类型
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10
// 创建我们的用户Schema
const treeSchema = new Schema({
  UserId: ObjectId,
  nikename: { unique: true, type: String },
  password: String,
  limitsc: Number,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() },
  tree: ''

}, {
  collection: 'user'
})

// 每次存储数据时都要执行
// treeSchema.pre('save', function(next) {
//   // let user = this
//   // console.log(this)
//   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
//     if (err) return next(err)
//     bcrypt.hash(this.password, salt, (err, hash) => {
//       if (err) return next(err)
//       this.password = hash
//       next()
//     })
//   })
// })

// treeSchema.methods = {
//   // 密码比对的方法
//   comparePassword: (_password, password) => {
//     return new Promise((resolve, reject) => {
//       bcrypt.compare(_password, password, (err, isMatch) => {
//         if (!err) resolve(isMatch)
//         else reject(err)
//       })
//     })
//   }
// }

// 发布模型
mongoose.model('User', treeSchema)
