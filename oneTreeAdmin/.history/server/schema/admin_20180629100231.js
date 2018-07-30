const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

var adminSchema = new Schema({
  userId: ObjectId,
  nikename: { type: String, unique: true },
  password: ''
})
