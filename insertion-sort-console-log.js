const numbers = require('./generate-number-arrays')

// let array = [4,1,6,2,5,3,9,8,7,10]
let array = numbers.nonUniqueRandomNumberArray(15)

function insertionSort(array){
  console.log(array)
  for( i = 0 ; i < array.length; i++ ){
    let currentNumber = array[i];
    console.log("Currently assessing " + currentNumber + " at position " + i)
    let position = i;
    for ( position; position >= 0 ; position-- ){
      array = swapNumberIfSmallerorEqual(currentNumber, array[position], position, array)
    }
  }
  return array
}

function swapNumberIfSmallerorEqual(currentNumber, comparisonNumber, comparisonNumberIndex , array){
  console.log ("\t\tLooking at number in position= " + comparisonNumberIndex)
  if (comparisonNumber > currentNumber){
    newPosition = comparisonNumberIndex;
    oldPosition = comparisonNumberIndex+1;
    array[oldPosition] = comparisonNumber;
    array[newPosition] = currentNumber;
    console.log(`\t** ${comparisonNumber} > ${currentNumber} so ${currentNumber} moved to the left by 1`)
    console.log("\t" +array)
  }
  return array
}

insertionSort(array);

module.exports = {
  insertionSort,
  swapNumberIfSmallerorEqual
}
