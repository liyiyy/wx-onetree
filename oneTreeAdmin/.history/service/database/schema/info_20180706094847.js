const mongoose = require('mongoose') // 引入Mongoose
const Schema = mongoose.Schema // 声明Schema
const ObjectId = Schema.Types.ObjectId // 声明Object类型
// const bcrypt = require('bcrypt')
// const SALT_WORK_FACTOR = 10
// 创建我们的用户Schema
const picSchema = new Schema({
  UserId: ObjectId,
  data: String,
  createAt: { type: Date, default: Date.now() }
}, {
  collection: 'pic'
})

const SweiperSchema = new Schema({
  id: ObjectId,
  src: String,
  url: String,
  title: String,
  intro: String,
  createAt: { type: Date, default: Date.now() }
}, {
  collection: 'swiper'
})

// 发布模型
mongoose.model('Pic', picSchema)
mongoose.model('Swiper', SweiperSchema)
