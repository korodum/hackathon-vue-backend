const router = require('express').Router()
const { authRouter } = require('./auth.router')
// const { usersRouter } = require('./users.router')

router
  .use('/auth', authRouter)
  // .use('/users', usersRouter)

exports.router = router