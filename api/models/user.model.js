const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
      },
      message: 'Please enter a valid email'
    },
    required: [true, 'Email required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  birth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  role: {
    type: String,
    enum: ['usr', 'adm'],
    default: 'usr'
  },
})

exports.UserModel = mongoose.model('users', userSchema)