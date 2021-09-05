const { Place } = require('../models/index')

const createPlace = async (req, res) => {
  try {
    console.log(req.body)
    const place = await new Place(req.body)
    await place.save()
    return res.status(201).json({ place })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find()
    return res.status(200).json({ places })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const deletePlace = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Place.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Place deleted')
    }
    throw new Error('Place not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlaceById = async (req, res) => {
  try {
    const { id } = req.params
    const place = await Place.findById(id)
    if (place) {
      return res.status(200).json({ place })
    }
    return res.status(404).send('Place does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlace,
  getAllPlaces,
  deletePlace,
  getPlaceById
}
