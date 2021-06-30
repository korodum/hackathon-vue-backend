const { GameModel } = require('../models/game.model')

exports.getAllGames = (req, res) => {
  GameModel
    .find()
    .then(games => res.status(200).json(games))
    .catch(err => res.status(500).json(err))
}