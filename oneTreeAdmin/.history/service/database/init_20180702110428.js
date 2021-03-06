const mongoose = require('mongoose')
const db = 'http://localhost:2233/onetree'

mongoose.Promise = global.Promise

exports.connect = () => {
  mongoose.connect(db)

  mongoose.connection.on('disconnected', (err) => {
    console.log(err)
    mongoose.connect(db)
  })

  mongoose.connection.on('error', err => {
    console.log(err)
    mongoose.connect(db)
  })

  mongoose.connection.once('open', () => {
    console.log('数据库连接成功')
  })
}
