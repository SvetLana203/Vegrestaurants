const { Schema } = require('mongoose')

const Place = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'user_id'
    }
  },
  {
    timestamps: true
  }
)

module.exports = Place
