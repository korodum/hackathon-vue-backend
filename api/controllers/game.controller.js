const { GameModel } = require('../models/game.model')

exports.getAllGames = (req, res) => {
  GameModel
    .find()
    .then(games => res.status(200).json(games))
    .catch(err => res.status(500).json(err))
}

exports.getOneGame = (req, res) => {
  GameModel
    .findById(req.params.gameId)
    .then(game => res.status(200).json(game))
    .catch(err => res.status(500).json(err))
}
