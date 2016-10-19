'use strict'

// Pending

// const promise = new Promise((resolve, reject) => {})
// console.log(promise)

// Resolved

// const promise = Promise.resolve(1.23)
// console.log(promise)

// Rejected

// const promise = Promise.reject(1.23)
// console.log(promise)

// Producer

// function wait(delay, probability) {
//
//   function executor(resolve, reject) {
//     const value = Math.random()
//
//     function tick() {
//       value < probability ? resolve(value) : reject('This is total crap: ' + value)
//     }
//     setTimeout(tick, delay)
//   }
//
//   return new Promise(executor)
// }

// Pending

// const promise = wait(300, 1.00)
// console.log(promise)

// Resolved

// wait(300, 1.00)
//   .then((result) => console.log('resolved: ' + result))
//   .catch((result) => console.log('rejected: ' + result))

// Rejected

// wait(300, 0.00)
//   .then((result) => console.log('resolved: ' + result))
//   .catch((result) => console.log('rejected: ' + result))

// More complex

// wait(300, 1.00).then((result) => {
//   console.log('result 1: ', result)
//   wait(100, 1.00).then((result) => {
//     console.log('result 2: ', result)
//     wait(200, 1.00).then((result) => {
//       console.log('result 3: ', result)
//     })
//   })
// })
// console.log('1st execution scheduled!')

// Chaining

// wait(300, 1.00)
//   .then((result) => {
//     console.log('result 1: ', result)
//     return wait(100, 1.00)
//   })
//   .then((result) => {
//     console.log('result 2: ', result)
//     return wait(200, 1.00)
//   })
//   .then((result) => {
//     console.log('result 3: ', result)
//   })
// console.log('Execution graph created!')

// Error

// wait(300, 1.00)
//   .then((result) => {
//     console.log('result 1: ', result)
//     return wait(100, 0.00) // will always be rejected
//   })
//   .then((result) => {
//     console.log('result 2: ', result)
//     return wait(200, 1.00);
//   })
//   .then((result) => {
//     console.log('result 3: ', result)
//   }).catch((err) => {
//     console.log('error=', err)
//     return wait(100, 0.00)
//   }).then((result) => {
//     console.log('result 4=', result)
//   })
// console.log('Execution graph created!')

// Join

// const p1 = wait(300, 1.00).then((result) => {
//   console.log('result 1: ', result)
//   return result
// })
// const p2 = wait(100, 1.00).then((result) => {
//   console.log('result 2: ', result)
//   return result
// })
// const p3 = wait(200, 1.00).then((result) => {
//   console.log('result 3: ', result)
//   return result
// })
// const p4 = Promise.all([p3, p2]).then((result) => {
//   console.log('result 4: ', result)
//   return result
// })
// console.log('Execution graph created!')

// Race

// const p1 = wait(300, 1.00).then((result) => {
//   console.log('result 1: ', result)
//   return result
// })
// const p2 = wait(100, 1.00).then((result) => {
//   console.log('result 2: ', result)
//   return result
// })
// const p3 = wait(200, 1.00).then((result) => {
//   console.log('result 3: ', result)
//   return result
// })
// const p4 = Promise.race([p1, p2, p3])
//   .then((result) => console.log('result 4: ', result))
// console.log('Execution graph created!')
