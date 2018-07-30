// const mongoose = require('mongoose') // 引入Mongoose
// const Schema = mongoose.Schema // 声明Schema
// const ObjectId = Schema.Types.ObjectId // 声明Object类型
// // 创建我们的用户Schema
// const adminSchema = new Schema({
//   activeId: ObjectId,
//   name: { unique: true, type: String },
//   password: String,
//   createAt: { type: Date, default: Date.now() },
//   lastLoginAt: { type: Date, default: Date.now() }

// }, {
//   collection: 'adminUser'
// })

// adminSchema.methods = {
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

// // 发布模型
// mongoose.model('Admin', adminSchema)
