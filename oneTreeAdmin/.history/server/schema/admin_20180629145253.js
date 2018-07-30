const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10

const adminSchema = new Schema({
  userId: ObjectId,
  nikename: { type: String, unique: true },
  password: String,
  creatAt: { type: Date, default: Date.now() },
  loginAt: { type: Date, default: Date.now() }
}, {
  collection: 'adminUser'
})

// 每次存储数据时都要执行
adminSchema.pre('save', function(next) {
  // let user = this
  // console.log(this)
  // bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
  //   if (err) return next(err)
  //   bcrypt.hash(this.password, salt, (err, hash) => {
  //     if (err) return next(err)
  //     this.password = hash
  //     next()
  //   })
  // })
})

adminSchema.methods = {
  comparepsw: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}
mongoose.model('Admin', adminSchema, 'adminUser')
