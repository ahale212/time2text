'use strict'

const db = require('../../config/database')
const express = require('express')
const router = express.Router()

router.get('/new', (request, response) => {
  response.render('cars/new')
})

router.post('/', (request, response) => {
  console.log(request.body)
  const cars = db.get('cars')
  cars.insert(request.body, (err, persistedCar) => {
    if (err) console.log(err)
    else console.log('Successfully persisted car:', persistedCar)
    response.status(201)
    response.render('cars/created', { id: persistedCar._id })
  })
})

router.get('/:carId', (request, response) => {
  console.log(request.params)
  const cars = db.get('cars')
  cars.findOne({ _id: request.params.carId }, {}, (err, retrievedCar) => {
    response.render('cars/my_car', { car: retrievedCar })
  })
})

module.exports = router
