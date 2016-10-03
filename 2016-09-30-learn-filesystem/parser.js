'use strict'

const fs = require('fs');

console.log("start");

function parser(callback) {

  console.log("parser call");
  fs.readFile('random.txt', (err, data) => {
    console.log("In readfile callback");
    var sortedWords = data.toString()
      .toLowerCase()
      .replace(/\n/g, ' ')
      .replace(/\./g, '')
      .split(' ')
      .sort()

    callback(sortedWords)
  })
}

console.log("before parser");
parser(theCallback)
console.log("after parser");

function theCallback(sortedWords) {
  console.log("In The callback");
  console.log(sortedWords);
}
module.exports = parser
console.log("parser.js is totally done executing")
