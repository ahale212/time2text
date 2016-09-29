'use strict'

function map (elements, callBack) {
  var result = []
  for (var i = 0; i < elements.length; i++) {
    result[i] = callBack(elements[i], i, elements)
  }
  return result
}

module.exports = map
