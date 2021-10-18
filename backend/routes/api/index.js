const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const bookingsRouter = require('./bookings');
const reviewsRouter = require('./reviews');
const mapsRouter = require('./maps');

router.use('/maps', mapsRouter); 
router.use('/session', sessionRouter);
router.use('/listings', listingsRouter)
router.use('/bookings', bookingsRouter)
router.use('/reviews', reviewsRouter)
router.use('/users', usersRouter);  


module.exports = router;