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

mongoose.model('Admin', adminSchema)
