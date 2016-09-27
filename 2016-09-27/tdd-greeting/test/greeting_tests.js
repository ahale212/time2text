'use strict'

const chai = require('chai')
const expect = chai.expect

const chaiString = require('chai-string')
chai.use(chaiString)

const greeting = require('../greeting').greeting

describe('A greeting', () => {

  describe('is a string which', () => {

    it('start with "Hello"', () => {
      expect(greeting()).to.startWith('Hello')
    })

    it('contains the <name>', () => {
      expect(greeting('John')).to.contain('John')
      expect(greeting('Jane')).to.contain('Jane')
    })

    it('end with !', () => {
      expect(greeting('John')).to.endWith('!')
    })

    it('has a space after Hello', () => {
      expect(greeting('John')).to.contain('Hello ')
    })
  })
})
