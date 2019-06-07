const numbers = require('./generate-number-arrays')

function selectionSort(array){
  let counter = 0;

  array.forEach( firstUnsortedNumber => {
    lowestNumber = firstUnsortedNumber;
    lowestNumberIndex = 0;

    for(i=0+counter; i<array.length; i++){ //counter variable makes new for loop begin at the start of "unselected" elements towards the end of the array
      if (array[i] < lowestNumber){
        lowestNumber = array[i];
        lowestNumberIndex = i; //record this so can swap
      }
    }

    if (firstUnsortedNumber != lowestNumber){
      array[counter] = lowestNumber;
      array[lowestNumberIndex] = firstUnsortedNumber;
    }

    counter += 1;
  })
  return array
}

// let array = [ 4, 15, 16, 15, 9, 0, 11, 8, 9, 2, 4, 2, 15, 17, 3, 17, 2, 0, 11, 8 ]
let array = numbers.nonUniqueRandomNumberArray(20)

console.log("\nUnsorted array:")
console.log(array)
console.log("Selection sorted array:")
console.log(selectionSort(array))

module.exports = {
  selectionSort
}
