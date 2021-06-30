const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  comment: {
    type: String,
    required: [true, 'Comment is required'],
  },
  rate: {
    type: Number,
    required: [true, 'Rate is required'],
    max: 5,
    min: 0,
  },
  date: Date,
})

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String
  },
  cover: String,
  developer: {
    type: String,
    required: [true, 'Developer is required'],
  }, 
  genre: {
    type: Array,
    required: [true, 'Gender is required'],
  },
  released: {
    type: Date,
    required: [true, 'Release date is required'],
  }, 
  platform: {
    type: Array,
    required: [true, 'Platform(s) are required'],
  },
  pegi: {
    type: Number,
    required: [true, 'Pegi rating is required'],
  },
  comments: [commentSchema],
})

exports.GameModel = mongoose.model('games', gameSchema)
