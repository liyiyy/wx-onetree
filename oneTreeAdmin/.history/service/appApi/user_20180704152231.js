const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/list', async(ctx) => {
  const req_query = ctx.request.query
  const username = req_query.username
  var reg = new RegExp(username)
  const User = mongoose.model('Admin')
  await User.find({ $or: [username: { $regex: reg }] }).exec().then(async(result) => {
    ctx.body = { code: 200, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

module.exports = router
