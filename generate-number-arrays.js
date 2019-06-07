function nonUniqueRandomNumberArray(start, stop, step){
  let array = Array.from({length:(stop-start)/step + 1 }, () => Math.floor(Math.random()*stop) )
  return array
}

function makeArrayContainUniqueNumbers(array){
  let = uniqueNumbers = []
  array.forEach( number => {
    if (uniqueNumbers.includes(number) == false ){
      uniqueNumbers.push(number)
    }
  })
  return uniqueNumbers
}

function ascOrderedNumberArray(start, stop, step){
  array = Array.from({length:(stop-start)/step + 1 }, (_,i) => start+(i*step) )
  return array
}

function descOrderedNumberArray(start, stop, step){
  array = Array.from({length:(start-stop)/step + 1 }, (_,i) => start-(i*step) )
  return array
}

module.exports = {
  nonUniqueRandomNumberArray,
  makeArrayContainUniqueNumbers,
  ascOrderedNumberArray,
  descOrderedNumberArray
}
