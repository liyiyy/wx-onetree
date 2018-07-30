const Router = require('koa-router')
const router = new Router()
const mongoose = require('mongoose')

router.get('/add', async(ctx) => {
  const Tree = mongoose.model('Tree')
  const newTree = new Tree(ctx.request.query)
  await User.find({ $or: [{ username: { $regex: reg }}, { starTime: { $gt: starTime }}, { endTime: { $lt: endTime }}] }).limit(10).sort({ createAt: -1 }).exec().then(async(result) => {
    ctx.body = { code: 200, message: 'success', status: 0, data: result }
  }).catch(error => {
    console.log(error)
    ctx.body = { code: 500, message: error }
  })
})

module.exports = router
