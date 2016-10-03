'use strict'

const fs = require('fs')

class Loader {
  loadData(filename) {
    const data = fs.readFileSync(filename)
    const lines = data.toString().split('\n')

    const temperatures = []

    const line1_elements = lines[1].split(',')
    const line1_temperature = parseInt(line1_elements[11].replace(/\"/g, ""))
    temperatures.push({ temperature: line1_temperature })

    if (lines[2] !== undefined && lines[2] !== '') {
      const line2_elements = lines[2].split(',')
      const line2_temperature = parseInt(line2_elements[11].replace(/\"/g, ""))
      temperatures.push({ temperature: line2_temperature })
    }

    return temperatures
  }
}

module.exports = Loader
