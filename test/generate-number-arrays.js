var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

const deepEqual = require('deep-equal') //package for testing if arrays are equal

const { nonUniqueRandomNumberArray,
        makeArrayContainUniqueNumbers,
        ascOrderedNumberArray,
        descOrderedNumberArray
      } = require('../generate-number-arrays.js');

describe('Number array generations', function () {
 it('nonUniqueRandomNumberArray should produce a list of specified length', function () {
      // Arrange
      let length = 10
      //Act
      let array = nonUniqueRandomNumberArray(length)
      //Assert
      expect(array.length).to.equal(length)
    });
 it('makeArrayContainUniqueNumbers should produce a list of unique values', function () {
      // Arrange
      let input = [1,1,1,2,3,4,5,2,3,4,5]
      let correctAnswer = [1,2,3,4,5]
      //Act
      let output = makeArrayContainUniqueNumbers(input)
      //Assert
      expect(deepEqual(output,correctAnswer)).to.equal(true)
    });
 it('ascOrderedNumberArray should produce a list of given length in ascending order', function () {
      // Arrange
      let correctAnswer = [1,2,3,4,5]
      //Act
      let array = ascOrderedNumberArray(1,5,1)
      //Assert
      expect(deepEqual(array,correctAnswer)).to.equal(true)
    });
 it('descOrderedNumberArray should produce a list of given length in descending order', function () {
      // Arrange
      let correctAnswer = [5,4,3,2,1]
      //Act
      let array = descOrderedNumberArray(5,1,1)
      //Assert
      expect(deepEqual(array,correctAnswer)).to.equal(true)
    });

});
