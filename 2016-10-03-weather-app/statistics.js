'use strict'

class Statistics {
  getStats(weatherData) {
    const temperatures = weatherData.map((dataSet) => dataSet.temperature)

    const min = Math.min.apply(null, temperatures)
    const max = Math.max.apply(null, temperatures)
    const sum = temperatures.reduce((currSum, currTemp) => {
      return currSum + currTemp
    })
    const avg = sum / temperatures.length

    return { minTemp: min, maxTemp: max, avgTemp: avg }
  }
}

module.exports = Statistics
