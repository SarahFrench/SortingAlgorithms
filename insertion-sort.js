const numbers = require('./generate-number-arrays')

// let array = [ 3,4,20,20,20,5,1,2 ]
let array = numbers.nonUniqueRandomNumberArray(20)


function insertionSort(array){
  for( i = 0 ; i < array.length; i++ ){
    let currentNumber = array[i];
    let position = i;
    for ( position; position >= 0 ; position-- ){
      array = swapNumberIfNeighbourSmallerorEqual(currentNumber, array[position], position, array)
    }
  }
  return array
}

function swapNumberIfNeighbourSmallerorEqual(currentNumber, comparisonNumber, comparisonNumberIndex, array){
  if (comparisonNumber > currentNumber){
    newPosition = comparisonNumberIndex;
    oldPosition = comparisonNumberIndex+1;
    array[oldPosition] = comparisonNumber;
    array[newPosition] = currentNumber;
  }
  return array
}

console.log("\nUnsorted array:")
console.log(array)
console.log("Insertion sorted array:")
console.log(insertionSort(array))

module.exports = {
  insertionSort,
  swapNumberIfNeighbourSmallerorEqual
}
