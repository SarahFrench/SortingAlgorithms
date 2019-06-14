const numbers = require('./generate-number-arrays')

class Node {
  constructor(array) {
    this.left = [];
    this.right = [];
    this.value = array;
    this.sorted = false;
    this.assignLeftAndRightValues(array)
    this.branchEnd = (this.left.value.length == 0 && this.right.value.length == 0) ? true : false;
    if (this.sorted == false && this.branchEnd == false){
      console.log(this);
      console.log("sorting");
      this.mergeLeftAndRight(this.left, this.right)
    }
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

  mergeLeftAndRight(leftNode, rightNode){
    console.log("leftNode =" + leftNode);
    console.log("rightNode =" + rightNode);
    let totalNumbers = [].concat(leftNode.value).concat(rightNode.value).length;
    let counter = 0;
    let sortedArray = [];
    for (let i = 0; i < totalNumbers; i++){
      console.log ("i = "  +i)
      let firstNumberLeft = leftNode.value[0] != undefined ? leftNode.value[0] : Infinity;
      let firstNumberRight = rightNode.value[0] != undefined ? rightNode.value[0] : Infinity;
      console.log ("firstNumberLeft = " + firstNumberLeft + "firstNumberRight = " + firstNumberRight)
      let smallerOfBoth = firstNumberLeft < firstNumberRight ? leftNode.value.shift() : rightNode.value.shift();
      console.log ("smallerOfBoth = " + smallerOfBoth)
      sortedArray.push(smallerOfBoth)
    }
    this.sorted = true;
    return sortedArray
  }

  navigateTree(node){
    if (node.value.length > 2){
      this.navigateTree(node.left)
      this.navigateTree(node.right)
    } else if (node.value.length == 2){
      console.log("This is a place where I should start some merging");
      console.log(node);
      this.navigateTree(node.left)
      this.navigateTree(node.right)
    } else if (node.value.length == 1) {
      console.log("This is the end of a branch:");
      console.log(node.value);
    }
  }
}

// let array = numbers.nonUniqueRandomNumberArray(5);
let array = [1,2,5,4,3]
let myBinaryTree = new Node(array)
myBinaryTree.navigateTree(myBinaryTree)
// mergeLeftAndRight(myBinaryTree.left, myBinaryTree.right)
// console.log(myBinaryTree.value);
