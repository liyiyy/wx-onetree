const mongoose = require('mongoose')
const db = 'mongodb://localhost/onetree'

mongoose.Promise = global.Promise

exports.connect = () => {
  mongoose.connect(db)
}
