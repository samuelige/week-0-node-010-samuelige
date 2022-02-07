/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {

  let maxPair = 0;
  let singlePair = [];

  // Sort the numbers in ascending order:
  cleanPile = cleanPile.sort((a, b) => a - b);
  dirtyPile = dirtyPile.sort((a, b) => a - b);

  
  for (let i = 0; i < cleanPile.length; i++) {
    if (cleanPile[i] === cleanPile[i + 1]) {
      maxPair++;
      cleanPile.splice(i, 1);
    } else {
      singlePair.push(cleanPile[i]);
    }
  }
  for (let j = 0; j < singlePair.length; j++) {
    if (dirtyPile.includes(singlePair[j]) && noOfWashes > 0) {
      dirtyPile.splice(j, 1);
      maxPair++;
      noOfWashes--;
    }
  }
  for (let k = 0; k < dirtyPile.length; k++) {
    if (dirtyPile[k] === dirtyPile[k + 1] && noOfWashes > 1) {
      maxPair++;
      noOfWashes -= 2;
      dirtyPile.splice(k, 1);
    }
  }
  return maxPair;
}

module.exports = getMaxPairs;
