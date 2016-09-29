'use strict'

var inputs = ["Hi", "hi", "tom", 'harry', 'Tom', 'tom']

var object = inputs.reduce((previousValue, currentElement, index) => {
  var word = currentElement.toLowerCase()
  previousValue[word] = (previousValue[word] || 0) + 1
  return previousValue
}, {})

console.log(object);
