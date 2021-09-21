// Only change code above this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
console.log(randomRangeNumber(10, 24));
// Only change code above this line
module.exports = randomRangeNumber;
