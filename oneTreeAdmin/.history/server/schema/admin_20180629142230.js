const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var adminSchema = new Schema({
  userId: ObjectId,
  nikename: { type: String, unique: true },
  password: String,
  creatAt: { type: Date, default: Date.now() },
  loginAt: { type: Date, default: Date.now() }
}, {
  collection: 'adminUser'
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
mongoose.model('Admin', adminSchema)
