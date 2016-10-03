'use strict'

const expect = require('chai').expect
const Loader = require('../../loader')

describe('A Loader', () => {

  describe('Given a csv file with a single data set', () => {
    describe('When loading and processing the file', () => {
      it('Then the returned array contains an object with the given temperature', () => {
        const loader = new Loader()

        var data = loader.loadData(__dirname + '/../data/single_data_set.csv')
        expect(data).to.deep.equal([{ temperature: 20 }])

        var data = loader.loadData(__dirname + '/../data/single_data_set_2.csv')
        expect(data).to.deep.equal([{ temperature: 15 }])
      })
    })
  })

  describe('Given a csv file with multiple data sets', () => {
    describe('When loading and processing the file', () => {
      it('Then the returned array contains objects with the given temperatures', () => {
        const loader = new Loader()

        var data = loader.loadData(__dirname + '/../data/multiple_data_sets.csv')
        expect(data).to.deep.equal([{ temperature: 19 }, { temperature: 21 }])
      })
    })
  })
})
