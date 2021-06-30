const router = require('express').Router()
const { authRouter } = require('./auth.router')
const { gamesRouter } = require('./games.router')

router
  .use('/auth', authRouter)
  .use('/games', gamesRouter)

exports.router = router