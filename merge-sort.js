const numbers = require('./generate-number-arrays')

// let array = numbers.nonUniqueRandomNumberArray(100);
let array = [1,2,3,4]
// let binaryTree = [[[1],[2]],[[3],[4]]];
let binaryTree = [[[1],[2]],[[3],[[4],[5]]]];

function printArray(array) {
  for (var i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
        printArray(array[i])
    } else {
        console.log(array[i])
    }
  }
} //copied from https://stackoverflow.com/questions/15854425/iterate-over-a-javascript-array-without-using-nested-for-loops/15854485#15854485

function makeBinaryTree(array){
  if (array.length > 1){
    array = splitArrayInTwo(array);
    for (var i = 0; i < array.length; i++){
      array[i] = makeBinaryTree(array[i]);
    }
  }
  return array;
}

function splitArrayInTwo(array){
  let midpoint = Math.floor(array.length/2);
  let array1 = array.slice(0, midpoint);
  let array2 = array.slice(midpoint, array.length);
  array = [array1, array2]
  return array;
}

let counter = 0;
function findSingleNumberArrays(binaryTree) {
  for (var i = 0; i < binaryTree.length; i++){
    if (binaryTree[i].length > 1){
      counter += 1;
      findSingleNumberArrays(binaryTree[i])
    } else {
      console.log(binaryTree[i]);
      console.log(counter)
    }
  }
}

console.log(findSingleNumberArrays(binaryTree))
