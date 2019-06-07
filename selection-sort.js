const numbers = require('./generate-number-arrays')

let array = [ 9, 8, 6, 4, 1, 0, 5, 8, 4, 1 ]

let length = array.length

let first = array[0]
console.log(first)

array.forEach( number => {
  if (number < first) {
    first = number
  }
})

console.log(first)
