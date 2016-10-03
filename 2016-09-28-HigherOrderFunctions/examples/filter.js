'use strict'

var inputs = ['short', 'short', 'long', 'longest']

var longWords = inputs.filter((element) => {
  return element.length > 5
})

console.log(longWords, inputs);
