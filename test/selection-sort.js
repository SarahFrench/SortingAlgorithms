var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const deepEqual = require('deep-equal') //package for testing if arrays are equal

const {selectionSort} = require('../selection-sort.js');

describe('Selection sort', function () {
 it('should sort a list of unique numbers into ascending order', function () {
      // Arrange
      let array = [4,1,6,2,5,3,9,8,7,10]
      let correctAnswer = [1,2,3,4,5,6,7,8,9,10]
      //Act
      let sortedArray = selectionSort(array)
      //Assert
      expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
    });
  it('should sort a list of non-unique numbers into ascending order', function () {
       // Arrange
       let array = [1,5,2,3,4,5,1]
       let correctAnswer = [1,1,2,3,4,5,5]
       //Act
       let sortedArray = selectionSort(array)
       //Assert
       expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
     });
  it('should sort a list numbers already in ascending order', function () {
       // Arrange
       let array = [1,2,3,4,5,6,7,8,9,10]
       let correctAnswer = [1,2,3,4,5,6,7,8,9,10]
       //Act
       let sortedArray = selectionSort(array)
       //Assert
       expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
     });
  it('should not break if sorting a list containing multiple elements of equal value', function () {
       // Arrange
       let array = [1,1,1,1,1]
       let correctAnswer = [1,1,1,1,1]
       //Act
       let sortedArray = selectionSort(array)
       //Assert
       expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
     });
  it('should not break if sorting a list with one element', function () {
       // Arrange
       let array = [1]
       let correctAnswer = [1]
       //Act
       let sortedArray = selectionSort(array)
       //Assert
       expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
     });
  it('should not break if sorting an empty array', function () {
       // Arrange
       let array = []
       let correctAnswer = []
       //Act
       let sortedArray = selectionSort(array)
       //Assert
       expect(deepEqual(sortedArray,correctAnswer)).to.equal(true)
     });
});
