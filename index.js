const feetInBlock = 264
const hq = 42

// Code your solution in this file!
// someValue = 43rd street
// hq = 42nd street
function distanceFromHqInBlocks(currentBlock) {
  // 43          42
  // current      hq
  if (currentBlock > hq) {
    return currentBlock - hq
  } else {
    // 34         42 
    // current     hq
    return hq - currentBlock
  }
}

function distanceFromHqInFeet(currentBlock) {
  // figure out how many blocks away it is
  let numberOfBlocks
  if (currentBlock > hq) {
     numberOfBlocks = currentBlock - hq
  } else {
    // 34         42 
    // current     hq
    numberOfBlocks = hq - currentBlock
  }
  // convert that into feet
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2) {
  // 43     48 
  // 1360
  // 1. Want to get distance between blocks
  const numberOfBlocks = Math.abs(block1 - block2)
  
  // 2. Convert to feet
  return numberOfBlocks * feetInBlock
}

function calculatesFarePrice(startingBlock, destinationBlock) {
  // How far are they going?
  const numberOfBlocks = Math.abs(startingBlock - destinationBlock)
  const numberOfFeet = numberOfBlocks * feetInBlock
  // First four hundred feet are free
  if (numberOfFeet <= 400) {
    return 0
  }
  // If the distance is between 400 and 2000 ft, the price is $0.02 per foot, and the first 400 are still free
  // if more than 400 AND less than or equal to 2000
  else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
    // first 400 free
    // 600 ft -> 200 
    return (numberOfFeet - 400) * 0.02
  }
  // 25 dollars for distance over 2000
  else if (numberOfFeet > 2000 && numberOfFeet < 2500) {
    return 25
  }
}