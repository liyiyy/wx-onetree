const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 声明Schema
const ObjectId = Schema.Types.ObjectId // 声明Object类型

// 创建我们的用户Schema
const adminSchema = new Schema({
  UserId: ObjectId,
  usename: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }

}, {
  collection: 'admin'
})

// 发布模型
mongoose.model('Admin', adminSchema)
