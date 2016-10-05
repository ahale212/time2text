var request = require('supertest');
const expect = require('chai').expect

const Module = require('module')
const originalRequire = Module.prototype.require
Module.prototype.require = function() {
  if (arguments[0] === '../src/twitter_adapter') {
    console.log(arguments[0])
    arguments[0] = '../test/mocks/twitter_adapter_mock'
  }
  return originalRequire.apply(this, arguments)
}

var app = require('../../app');

describe('GET /twitter', () => {
  it('should return a successful response when requesting /twitter', (done) => {
    request(app).get('/twitter').expect(200, done);
  })

  it('should return a successful response when searching for user', (done) => {
    request(app).get('/twitter?user_timeline=galvanize').expect(200, done);
  })

  it('should get a list of tweets for phrase galvanize', (done) => {
    request(app).get('/twitter?q=galvanize').end((req, res) => {
      expect(res.status).to.equal(200)
      expect(res.text).to.contain('<li>Hello world!</li>')
      expect(res.text).to.contain('<li>galvanize</li>')
      done()
    });
  })
})
