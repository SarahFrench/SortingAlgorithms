const numbers = require('./generate-number-arrays')

// let array = numbers.nonUniqueRandomNumberArray(100);
let array = [ 8, 12, 12, 24, 16, 15, 6 ]

function printArray(array) {
    for (var i = 0; i < array.length; i++)
        if (Array.isArray(array[i]))
            printArray(array[i])
        else
            console.log(array[i])
}

function makeBinaryTree(array){
  if (array.length > 1){
    array = splitArrayInTwo(array);
    for (var i = 0; i < array.length; i++){
      array[i] = makeBinaryTree(array[i]);
    }
  }
  return array
}

function splitArrayInTwo(array){
  let midpoint = Math.floor(array.length/2);
  let array1 = array.slice(0, midpoint);
  let array2 = array.slice(midpoint, array.length);
  array = [array1, array2]
  return array;
}

console.log(makeBinaryTree(array))
