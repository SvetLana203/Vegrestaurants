const { Router } = require('express')
// const placeRouter = require('./placeRouter')
// const AppRouter = Router()
const controllers = require('../controllers/PlaceController')
const router = Router()

//AppRouter.use('/places', placeRouter)

router.post('/places', controllers.createPlace)
router.get('/places', controllers.getAllPlaces)
router.delete('/places/:id', controllers.deletePlace)
// module.exports = AppRouter
module.exports = router
