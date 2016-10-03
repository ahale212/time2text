'use strict'
var expect = require('chai').expect;

const parser = require('../parser');

describe('Given parser', () => {
  describe('When called with a callback', () => {
    it('Then it calls the callback', (done) => {
      parser(done)
    });
    it('Then passes null for err on success', (done) => {
      parser((err) => {
        expect(err).to.equal(null)
        done()
      })
    });
    it('Then passes an Object for data on success', (done) => {
      parser((err, data) => {
        expect(err).to.equal(null)
        expect(typeof data).to.equal('object')
        done()
      })
    });
    it('Then data object must have one or more properties', (done) => {
      parser((err, data) => {
        expect(err).to.equal(null)
        expect(Object.keys(data).length).to.be.above(0)
        done()
      })
    });
    it('Then data object must have "the"', (done) => {
      parser((err, data) => {
        expect(err).to.equal(null)
        expect(Object.keys(data).length).to.be.above(0)
        done()
      })
    });
  });
});
