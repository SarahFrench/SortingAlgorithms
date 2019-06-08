# SortingAlgorithms

## Selection Sort:
1) Search the array of numbers for the smallest value

  - [4,3,5,=>1] - looking for next smallest

2) Move that element to the first position (swap with value there), OR remove and add to end of a separate output array

  - [=>1,3,5,4] - swapped with number in 1st position

3) Search the remaining array (n-1 elements), to the right of the element selected in step 1 and 2, and find the next smallest number

  - [**1**,=>3,5,4] - 2nd smallest number found

4) Move that element to the second position of the array (swap with value there), OR remove and add to end of a separate output array

  - [**1**,**3**,5,4] - swapped with number in 2nd position

5) Repeat steps 3 & 4 until you've selected all elements as the smallest value of the unsorted remaining numbers

  - [**1**,**3**,=>5,4] - looking for next smallest
  - [**1**,**3**,5,=>4] - found smallest unsorted number
  - [**1**,**3**,**4**,5] - swapped with number in 3rd position
  - [**1**,**3**,**4**,=>5] - looking for next smallest
  - [**1**,**3**,**4**,**5**] - found smallest unsorted number
  - List is sorted

## Insertion Sort:
1) Select first element of the array - is it now a sorted array of 1 element

  - [=>4,3,5,1] - cannot move left

2) Select second element of the array

  1) If element to the left of the selected element is larger or equal to value, swap their positions

  - [**4**,=>3,5,1]
  - [=>3,**4**,5,1] - is smaller than 4, so moves left

  2) continue this process until the number reaches the start of the array or its neightbour to the left is a smaller value

3) Select third element and repeat

- [**3**,**4**,=>5,1] - is greater value than the element to the left, so doesn't move

4) Continue until you select the find element in the array and complete all comparisons with their neighbours to the left

- [**3**,**4**,**5**,=>1]
- [**3**,**4**,=>1,**5**]
- [**3**,=>**1**,4,**5**]
- [=>1,**3**,**4**,**5**]
- [**1**,**3**,**4**,**5**]
- List is sorted

## Merge sort

1) First you split the array in half repeatedly to form a binary tree where each end is an array of one value:
  - [1, 5, 2, 4, 3] becomes:
  - [ [ [1],[5] ] [ [2],[ [4],[3] ] ] ]
