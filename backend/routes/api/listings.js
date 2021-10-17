const express = require("express");
const asyncHandler = require("express-async-handler");
const { check }  = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser } = require("../../utils/auth"); 
const { requireAuth } = require('../../utils/auth');
const router = express.Router();  

const { Listing, Image, User, Review, Booking } = require("../../db/models");
  
      

//GET /api/listings
router.get( '/', asyncHandler(async (req, res) => {
    const listingss = await Listing.findAll({ include: Image }); 
    return res.json(listingss);  
}))  

// GET /api/listings/:listingId
router.get('/:listingId(\\d+)', asyncHandler(async (req, res) => { 
    const listingId = parseInt(req.params.listingId, 10)
    const onelisting = await Listing.findOne({ where: { id: listingId }, include: Image })
    return res.json(onelisting)
})) 

// DELETE single listing 
router.delete('/:listingId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const listingId = parseInt(req.params.listingId, 10)
    const onelisting = await Listing.findOne({ where: { id: listingId } })
    await listing.destroy()
    return res.json(onelisting)  
}))


// Post Route w/o aws 
router.post('/', requireAuth, asyncHandler(async (req, res) => {  

    const { name, description, price, address, borough, neighborhood, latitude, longitude, IMG1, IMG2, IMG3, IMG4, IMG5 } = req.body
    const { id: userId } = req.user
    const home = await Listing.create({ userId, name, description, price, address, borough, neighborhood,latitude, longitude, price });  
    const { id: listingId } = home 

    await Image.create({ listingId, url: IMG1 })
    await Image.create({ listingId, url: IMG2 }) 
    await Image.create({ listingId, url: IMG3 })
    await Image.create({ listingId, url: IMG4 })
    await Image.create({ listingId, url: IMG5 })    


    const New = await Listing.findByPk(listingId, { include: [Image] })  
    return res.json(New)
  }))

  // Update 
  router.put('/:listingId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { name, description, price, address, borough, neighborhood, latitude, longitude, IMG1, IMG2, IMG3, IMG4, IMG5 } = req.body  
    const listingId = parseInt(req.params.listingId, 10)
    const OneListing = await Listing.findOne({ where: { id: listingId } })

    await OneListing.update({name, description, price, address, borough, neighborhood, latitude, longitude})      

    const listingpictures = await Image.findAll({ where: { listingId: listingId } })
    await listingpictures[0].update({ url: IMG1 })
    await listingpictures[1].update({ url: IMG2 })
    await listingpictures[2].update({ url: IMG3 })
    await listingpictures[3].update({ url: IMG4 })
    await listingpictures[4].update({ url: IMG5 })    

    const New = await Listing.findOne({ where: { id: listingId }, include: Image })  
    return res.json(New);
  }))

  module.exports = router;     