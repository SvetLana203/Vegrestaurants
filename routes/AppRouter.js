const { Router } = require('express')
const controllers = require('../controllers/PlaceController')
const router = Router()

router.post('/places', controllers.createPlace)
router.get('/places', controllers.getAllPlaces)
router.delete('/places/:id', controllers.deletePlace)

module.exports = router
