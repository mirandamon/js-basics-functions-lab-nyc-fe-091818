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

function distanceTravelledInFeet() {
  
}