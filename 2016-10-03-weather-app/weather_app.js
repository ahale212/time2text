'use strict'

const fs = require('fs')

const Loader = require('./loader')
const Statistics = require('./statistics')

class WeatherApp {
    loadData(filename) {
      const loader = new Loader()
      this.weatherData = loader.loadData(filename)
    }

    getOverview() {
      const stats = new Statistics()
      const result = stats.getStats(this.weatherData)
      return 'Min: ' + result.minTemp + ' °C, Max: ' + result.maxTemp + ' °C, Average: ' + result.avgTemp + ' °C'
    }
}

module.exports = WeatherApp
