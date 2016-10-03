'use strict'

const expect = require('chai').expect;
const fs = require('fs');

describe('Given fs', () => {
  describe('When reading this file', () => {
    it('Then the callback should be called', (done) => {

      fs.readFile(__filename, (err, data) => {
        console.log('in callback')
        expect(err).to.equal(null)
        done()
      })
    });
  });
});
