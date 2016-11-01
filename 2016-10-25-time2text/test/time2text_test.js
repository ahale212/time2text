'use strict'

const expect = require('chai').expect
const time2text = require('../time2text')

describe('Time to Text converter', () => {
    it('Time is 00:00 expects midnight', () => {
        expect(time2text('00:00')).to.equal('midnight')
    })
    it('Time is 12:00 expects midday', () => {
        expect(time2text('12:00')).to.equal('noon')
    })
    it("Time is 01:00 expects one o'clock in the morning", () => {
        expect(time2text('01:00')).to.equal("one o'clock in the morning")
    })
    it("Time is 02:00 expects two o'clock in the morning", () => {
        expect(time2text('02:00')).to.equal("two o'clock in the morning")
    })
    it("Time is 03:00 expects three o'clock in the morning", () => {
        expect(time2text('03:00')).to.equal("three o'clock in the morning")
    })
    it("Time is 04:00 expects four o'clock in the morning", () => {
        expect(time2text('04:00')).to.equal("four o'clock in the morning")
    })
    it("Time is 05:00 expects five o'clock in the morning", () => {
        expect(time2text('05:00')).to.equal("five o'clock in the morning")
    })
    it("Time is 06:00 expects six o'clock in the morning", () => {
        expect(time2text('06:00')).to.equal("six o'clock in the morning")
    })
    it("Time is 07:00 expects seven o'clock in the morning", () => {
        expect(time2text('07:00')).to.equal("seven o'clock in the morning")
    })
    it("Time is 08:00 expects eight o'clock in the morning", () => {
        expect(time2text('08:00')).to.equal("eight o'clock in the morning")
    })
    it("Time is 09:00 expects nine o'clock in the mornin", () => {
        expect(time2text('09:00')).to.equal("nine o'clock in the morning")
    })
    it("Time is 10:00 expects ten o'clock in the morning", () => {
        expect(time2text('10:00')).to.equal("ten o'clock in the morning")
    })
    it("Time is 11:00 expects eleven o'clock in the morning", () => {
        expect(time2text('11:00')).to.equal("eleven o'clock in the morning")
    })
    it("Time is 13:00 expects one o'clock in the afternoon", () => {
        expect(time2text('13:00')).to.equal("one o'clock in the afternoon")
    })
    it("Time is 14:00 expects two o'clock in the afternoon", () => {
        expect(time2text('14:00')).to.equal("two o'clock in the afternoon")
    })
    it("Time is 15:00 expects three o'clock in the afternoon", () => {
        expect(time2text('15:00')).to.equal("three o'clock in the afternoon")
    })
    it("Time is 16:00 expects four o'clock in the afternoon", () => {
        expect(time2text('16:00')).to.equal("four o'clock in the afternoon")
    })
    it("Time is 17:00 expects five o'clock in the afternoon", () => {
        expect(time2text('17:00')).to.equal("five o'clock in the afternoon")
    })
    it("Time is 18:00 expects six o'clock in the evening", () => {
        expect(time2text('18:00')).to.equal("six o'clock in the evening")
    })
    it("Time is 12:14 expects twelve fourteen in the afternoon", () => {
        expect(time2text('12:14')).to.equal("twelve fourteen in the afternoon")
    })
    it("Time is 05:06 expects five oh six in the morning", () => {
        expect(time2text('05:06')).to.equal("five oh six in the morning")
    })
    it("Time is 22:52 expects ten fifty-two in the evening", () => {
        expect(time2text('22:52')).to.equal("ten fifty-two in the evening")
    })
})
