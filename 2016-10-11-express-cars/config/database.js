'use strict'

const monk = require('monk')

const db = monk('localhost/cars_development')

module.exports = db
