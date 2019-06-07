# SortingAlgorithms

## Selection Sort:
1) Search the array of numbers for the smallest value
2) Move that element to the first position (swap with value there), OR remove and add to end of a separate output array
3) Search the remaining array (n-1 elements), to the right of the element selected in step 1 and 2, and find the next smallest number
4) Move that element to the second position of the array (swap with value there), OR remove and add to end of a separate output array
5) Repeat steps 3 & 4 until you've selected all elements as the smallest value of the unsorted remaining numbers

## Insertion Sort:
1) Select first element of the array - is it now a sorted array of 1 element
2) Select second element
  1) If element to the left is larger or equal, swap their positions
  2) If element to the left of the new position is also larger or equal, swap their positions
  3) Continue until this isn't true
3) Select third element and repeat
4) Continue until you select the find element in the array and complete all comparisons with their neighbours to the left
