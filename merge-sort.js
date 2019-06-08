const numbers = require('./generate-number-arrays')

let array = numbers.nonUniqueRandomNumberArray(10);
console.log(array)

function splitArrayInTwo(array){
  output = [];
  let midpoint = Math.floor(array.length/2);
  if (array.length > 1 && midpoint != 0){
    let midpoint = Math.floor(array.length/2);
    let array1 = array.slice(0, midpoint);
    let array2 = array.slice(midpoint, array.length);
    output = [array1, array2];
  }
  return output
}

array = splitArrayInTwo(array)
array.forEach ( function (x, i){
  array[i] = splitArrayInTwo(x)
})

console.log(array)
