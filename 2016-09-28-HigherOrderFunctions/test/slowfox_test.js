'use strict'
const expect = require('chai').expect;
const slowFoxes = require('../slowFoxes');

xdescribe('slowFoxes', () => {
  it('returns empty array when given an empty array', () => {
    expect(slowFoxes([])).to.eql([])
  });
  it('returns ["Red Fox"] when given ["Red Fox"]', () => {
    expect(slowFoxes(["Red Fox"])).to.eql(["Red Fox"])
  });
  it('returns empty arrary when given ["Swift Fox"]', () => {
    expect(slowFoxes(["Swift Fox"])).to.eql([])
  });
  it('returns ["Red Fox"] when given ["Red Fox", "Swift Fox"]', () => {
    expect(slowFoxes(["Red Fox", "Swift Fox"])).to.eql(["Red Fox"])
  });
  it('returns ["Red Fox"] when given ["Swift Fox", "Red Fox"]', () => {
    expect(slowFoxes(["Swift Fox", "Red Fox"])).to.eql(["Red Fox"])
  });
  it('returns ["Kit Fox", "Red Fox"] when given ["Kit Fox","Red Fox", "Swift Fox"]', () => {
    expect(slowFoxes(["Kit Fox", "Red Fox", "Swift Fox"])).to.eql(["Kit Fox", "Red Fox"])
  });
});
