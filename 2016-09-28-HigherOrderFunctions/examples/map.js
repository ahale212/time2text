'use strict'

var words = [, 'Hi', 'how', 'are', 'you?']

function reverseStrings (strings) {
  return strings.map((currentElement) => currentElement.split('').reverse().join(''))
}

console.log(reverseStrings(words));
