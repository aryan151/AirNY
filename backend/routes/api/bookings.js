const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Listing, Booking } = require('../../db/models')

const router = express.Router();

// GET  /api/bookings
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.user
  const bookings = await Booking.findAll({ where: { userId: id }, include: Listing })
  return res.json(bookings)
}))


// POST /api/bookings 
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { listingId, userId, startDate, endDate } = req.body
  const newBooking = await Booking.create({ listingId, userId, startDate, endDate})
  return res.json(newBooking)     
}))


// PUT /api/bookings/:bookingId
router.put('/:bookingId', requireAuth, asyncHandler(async (req, res) => {
  const { userId, listingId, startTime, endTime } = req.body
  const bookingId = parseInt(req.params.bookingId, 10)
  const booking = await Booking.findOne({ where: { id: bookingId } })
  await booking.update({ userId, listingId, startDate, endDate })  
  return res.json(booking)  
}))


// DELETE /api/bookings/:bookingId 
router.delete('/:bookingId', requireAuth, asyncHandler(async (req, res) => {
  const bookingId = parseInt(req.params.bookingId, 10)
  const booking = await Booking.findOne({ where: { id: bookingId } })
  await booking.destroy()
  return res.json({ booking })
}))


module.exports = router;  