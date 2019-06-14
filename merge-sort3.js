//COPIED FROM ARTICLE HERE: https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060



// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  console.log("left " + left)
  console.log("right " + right)
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge(left, right){
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  let result = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  console.log("merging" + left + " and " + right)
  console.log("got" + result)

  return result
}

console.log(mergeSort([3,4,5,-1,1,7]));
