const gamesRouter = require('express').Router()
const {
  getAllGames,
} = require('../controllers/game.controller')

gamesRouter
  .get('/', getAllGames)

exports.gamesRouter = gamesRouter
