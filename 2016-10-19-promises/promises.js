'use strict'

// Callback Hell

const fs = require('fs')

const myFile = './tmp.txt'
fs.readFile(myFile, 'utf8', (err, txt) => {
  if (err) return console.log('Appending text failed: ', err)

  txt = txt + '\nAppended something!'
  fs.writeFile(myFile, txt, (err) => {
    if(err) return console.log('Appending text failed: ', err)
    console.log('Appended text!')
  })
})


// Better: Named functions and hoisting

// const fs = require('fs')
//
// const myFile = './tmp.txt'
// fs.readFile(myFile, 'utf8', appendText)
//
// function notifyUser(err) {
//   if(err) return console.log('Appending text failed: ', err)
//   console.log('Appended text!')
// }
//
// function appendText(err, txt) {
//   if (err) return console.log('Appending text failed: ', err)
//
//   txt = txt + '\nAppended something!'
//   fs.writeFile(myFile, txt, notifyUser)
// }


// Promises

// const Promise = require('bluebird')
// const fs = require('fs')
// Promise.promisifyAll(fs)
//
// const myFile = './tmp.txt'
// fs.readFileAsync(myFile, 'utf8').then((txt) => {
//   txt = txt + '\nAppended something!'
//   return fs.writeFileAsync(myFile, txt)
// }).then(() => {
//   console.log('Appended text!')
// }).catch((err) => {
//   console.log('Appending text failed: ', err)
// })


// Even shorter

// const Promise = require('bluebird')
// const fs = require('fs')
// Promise.promisifyAll(fs)
//
// const myFile = './tmp.txt'
// fs.readFileAsync(myFile, 'utf8')
// .then((txt) => {
//   txt = txt + '\nAppended something!'
//   return fs.writeFileAsync(myFile, txt)
// })
// .then(console.log('Appended text!'))
// .catch((err) => console.log('Appending text failed: ', err))
