const gamesRouter = require('express').Router()
const {
  getAllGames,
  getOneGame,
} = require('../controllers/game.controller')

gamesRouter
  .get('/', getAllGames)
  .get('/:gameId', getOneGame)

exports.gamesRouter = gamesRouter
