const numbers = require('./generate-number-arrays')

class Node {
  constructor(array) {
    this.left = [];
    this.right = [];
    this.value = array;
    this.assignLeftAndRightValues(array)
  }

  assignLeftAndRightValues(array){
    if (array.length > 1){
      let midpoint = Math.floor(array.length/2);
      let left = array.slice(0, midpoint);
      let right = array.slice(midpoint, array.length);
      this.left = new Node(left)
      this.right = new Node(right)
    }
  }
}

let array = numbers.nonUniqueRandomNumberArray(100);
// let array = [1,2,3,4,5]
let myBinaryTree = new Node(array)
