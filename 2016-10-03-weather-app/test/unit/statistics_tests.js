'use strict'

const expect = require('chai').expect

const Statistics = require('../../statistics')

describe('Statistics', () => {

  describe('Given an array with one weather object', () => {
    describe('When getting statistics', () => {
      it('Then minimum temperature should be equal to the temperature of the weather object', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: 20 } ]
        var result = stats.getStats(weatherData)
        expect(result.minTemp).to.equal(20)

        var weatherData = [ { temperature: 15 } ]
        var result = stats.getStats(weatherData)
        expect(result.minTemp).to.equal(15)
      })
      it('Then maximum temperature should be equal to the temperature of the weather object', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: 20 } ]
        var result = stats.getStats(weatherData)
        expect(result.maxTemp).to.equal(20)

        var weatherData = [ { temperature: 15 } ]
        var result = stats.getStats(weatherData)
        expect(result.maxTemp).to.equal(15)
      })
      it('Then average temperature should be equal to the temperature of the weather object', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: 20 } ]
        var result = stats.getStats(weatherData)
        expect(result.avgTemp).to.equal(20)

        var weatherData = [ { temperature: 15 } ]
        var result = stats.getStats(weatherData)
        expect(result.avgTemp).to.equal(15)
      })
    })
  })

  describe('Given an array with multiple weather objects', () => {
    describe('When getting statistics', () => {
      it('Then minimum temperature should be correct according to provided temperatues', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: 0 }, { temperature: -1 } ]
        var result = stats.getStats(weatherData)
        expect(result.minTemp).to.equal(-1)

        var weatherData = [ { temperature: 0 }, { temperature: -1 }, { temperature: -2 } ]
        var result = stats.getStats(weatherData)
        expect(result.minTemp).to.equal(-2)
      })
      it('Then maximum temperature should be correct according to provided temperatues', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: -1 }, { temperature: 0 } ]
        var result = stats.getStats(weatherData)
        expect(result.maxTemp).to.equal(0)
      })
      it('Then average temperature should be correct according to provided temperatues', () => {
        const stats = new Statistics()

        var weatherData = [ { temperature: -1 }, { temperature: 0 } ]
        var result = stats.getStats(weatherData)
        expect(result.avgTemp).to.equal(-0.5)
      })
    })
  })
})
