const numbers = require('./generate-number-arrays')

let array = numbers.nonUniqueRandomNumberArray(5);
console.log(array)

let listOfLists = []

array.forEach( number => {
  listOfLists.push([number])
})
