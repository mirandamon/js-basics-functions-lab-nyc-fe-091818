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
  }
  return currentBlock - hq
}