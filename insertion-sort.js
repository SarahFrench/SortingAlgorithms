const numbers = require('./generate-number-arrays')

let array = [ 3,4,20,20,20,5,1,2 ]
// let array = numbers.nonUniqueRandomNumberArray(20)
console.log(array)

function insertionSort(array){
  for( i = 0 ; i < array.length; i++ ){
    let currentNumber = array[i];
    let position = i;
    for ( position; position >= 0 ; position-- ){
      array = swapNumberIfSmallerorEqual(currentNumber, array[position], position, array)
    }
  }
  return array
}

function swapNumberIfSmallerorEqual(currentNumber, comparisonNumber, comparisonNumberIndex, array){
  if (comparisonNumber > currentNumber){
    newPosition = comparisonNumberIndex;
    oldPosition = comparisonNumberIndex+1;
    array[oldPosition] = comparisonNumber;
    array[newPosition] = currentNumber;
  }
  return array
}

console.log(insertionSort(array))
