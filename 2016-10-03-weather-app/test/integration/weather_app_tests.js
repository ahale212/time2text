'use strict'

const expect = require('chai').expect

const WeatherApp = require('../../weather_app')

describe('Weather App', () => {
  describe('As a weather person, I would like to see the Max, Min, and Average Temperature', () => {

    const app = new WeatherApp()

    describe('Given a csv file with a single data set', () => {
      describe('When loading and processing the file', () => {
        it('Then the printed Min, Max and Average should be the given temperature', () => {
          app.loadData(__dirname + '/../data/single_data_set.csv')
          expect(app.getOverview()).to.equal('Min: 20 °C, Max: 20 °C, Average: 20 °C')

          app.loadData(__dirname + '/../data/single_data_set_2.csv')
          expect(app.getOverview()).to.equal('Min: 15 °C, Max: 15 °C, Average: 15 °C')
        })
      })
    })

    describe('Given a csv file with multiple data sets', () => {
      describe('When loading and processing the file', () => {
        it('Then the printed Min, Max and Average should show the correct values', () => {
          app.loadData(__dirname + '/../data/multiple_data_sets.csv')
          expect(app.getOverview()).to.equal('Min: 19 °C, Max: 21 °C, Average: 20 °C')
        })
      })
    })
  })
})
