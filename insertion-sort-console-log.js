const numbers = require('./generate-number-arrays')

let array = [ 3,4,20,20,20,5,1,2 ]
// let array = numbers.nonUniqueRandomNumberArray(20)
console.log(array)

function swapNumberIfSmallerorEqual(currentNumber, comparisonNumber, comparisonNumberIndex){
  if (comparisonNumber > currentNumber){
    newPosition = comparisonNumberIndex
    oldPosition = array.indexOf(currentNumber)
    array[oldPosition] = comparisonNumber;
    array[newPosition] = currentNumber;
    console.log(`${comparisonNumber}> ${currentNumber} so ${currentNumber} moved to the left by 1`)
    console.log(`\t\t${array}`)
  }
}

for( i = 0 ; i < array.length; i++ ){
  let currentNumber = array[i];
  let position = i;
  console.log(`${currentNumber} is deciding if it should move`)
  for ( position; position >= 0 ; position-- ){
    swapNumberIfSmallerorEqual(currentNumber, array[position], position)
  }
}

console.log(array)
