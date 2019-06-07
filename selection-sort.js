const numbers = require('./generate-number-arrays')

let array = numbers.nonUniqueRandomNumberArray(1,20,1)
console.log(array)

let length = array.length;

let counter = 0;

array.forEach( number => {
  lowestNumber = number;
  lowestNumberIndex = 0;

  for(i=0+counter; i<length; i++){
    if (array[i] < lowestNumber){
      lowestNumber = array[i];
      lowestNumberIndex = i;
    }
  }

  array[counter] = lowestNumber;
  if (number != lowestNumber){
    array[lowestNumberIndex] = number;
  }
  counter += 1;
})

console.log(array)





// let first = array[0]
// console.log(first)
//
// array.forEach( number => {
//   if (number < first) {
//     first = number
//   }
// })
//
// console.log(first)
