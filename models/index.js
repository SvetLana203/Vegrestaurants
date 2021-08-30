const mongoose = require('mongoose')
const PlaceSchema = require('./place')
const UserSchema = require('./user')

const Place = mongoose.model('places', PlaceSchema)
const User = mongoose.model('users', UserSchema)

module.exports = {
  Place,
  User
}
