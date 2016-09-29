'use strict'

const expect = require('chai').expect;
const map = require('../map');
describe('Map', () => {
  it('returns an empty array when given []', () => {
    expect(map([], () => {})).to.eql([])
  });
  it('returns ["fred"] when given [1] and cb that returns fred', () => {
    expect(map([1], () => 'fred')).to.eql(['fred'])
  });
  it('returns ["fred", "fred"] when given [1, 2] and cb that returns fred', () => {
    expect(map([1, 2], () => 'fred')).to.eql(['fred', 'fred'])
  });
  it('returns ["odd", "even"] when given [1, 2] and cb that returns fred', () => {
    expect(map([1, 2], (element) => element % 2 === 0 ? 'even' : 'odd')).to.eql(['odd', 'even'])
  });
});
