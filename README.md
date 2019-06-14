# SortingAlgorithms

## Note

Run npm install before doing anything. Testing requires mocha and chai packages, and the tests themselves rely on the deep-equal package for comparing arrays.

## Merge sort implementation explained

I couldn't suss out implementing merge sort myself, mainly as I havne't done much recursion before, so I found an example online. It's merge-sort3.js .

In that script there are two functions, one which goes through recursion and calls on the other function.

The second function that's called on by an outer function is called `merge`. This takes in two sorted arrays and pushes elements into a sorted resultArray.

The `mergeSort` function undergoes recursion and takes in an unsorted array. As recursion happens, the input goes from the full input array to halves, and halves of halves etc. To stop recursion happening forever there's a ['base condition'](https://www.freecodecamp.org/news/recursion-is-not-hard-858a48830d83/) which, when true, will stop recursion. I.E, your function returns a value if that condition is true. In the case of `mergeSort` the base condition is unsortedArray.length <= 1. unsortedArray.length <= 1 becomes true after an array is split and one of the products is a single element array. This means if everything is completely split, no more splitting is attempted (won't go on infinitely)

When the function is first called it is passed a long unsorted array. As its length is >1 it is split into two. The left and right arrays it is split into are passed into the `merge` function, BUT are arguments in another invocation of the `mergeSort` function. This means that merge will not properly start until the `mergeSort` function returns a value. This first occurs when the base condition is true, i.e. when splitting has produced a single element array. That means that merging begins - you get 2 element arrays made. Crucially, where `merge` is called inside `mergeSort` the output of `merge` is returned. So, when `merge` completes and returns a merged, sorted array, `mergeSort` returns that merged, sorted array. And because all the arguments being passed into `merge` are calls to `mergeSort`, it means everything starts merging from the bottom upwards.

[It's just like this diagram](https://cdn-media-1.freecodecamp.org/images/KioR-yl8aB2lxriDCulsNMTivQ1J5xlmEyrg)

The thing I was missing from my versions of merge sort was the ability to return up the tree, which is achieved here by passing calls to the recusive function as arguments for the merging function.

## Explanation of different sorting algorithms

### Selection Sort:
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

### Insertion Sort:
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

### Merge sort

1) First you split the array in half repeatedly to form a binary tree where each end is an array of one value:
  - [1, 5, 2, 4, 3] becomes:
  - [ [ [1],[5] ] [ [2],[ [4],[3] ] ] ]

2) You then move up through the levels of the tree and make pairwise comparisons of sorted arrays. You compare the first elements of each array being merged to find the smallest value, and place the smallest value to the end of the output/merged array from that pairwise comparison.

3) The single element arrays at the bottom are sorted, and this algorithm depends on the fact that all arrays being merged together are already sorted. This is what makes the comparison of the first elements a valid approach.

 4) Example:

  - Three levels deep into the tree

    Merge 1: [ [4],[3] ] => compare 4 to 3 and get output [3,4]

  - Two levels deep into the tree

    Merge 1: [ [1],[5] ] => compare 1 to 5 and get output [1,5]

    Merge 2: [ [2],[3,4] ]

      - compare 2 to 4, put 2 first
      - As list 1 is now finished the remainder (all) of list 2 is added to the end


  - 1 level deep into the tree

    Merge 1: [ [1,5],[2,3,4] ]

      - comparing 1 and 2, 1 is smallest so goes first in merged array's end
      - comparing 5 and 2, 2 is smallest so is added to merged array's end
      - comparing 5 and 3, 3 is smallest so is added to merged array's end
      - comparing 5 and 4, 4 is smallest so is added to merged array's end
      - 5 is the last unsorted number and is added to merged array's end
