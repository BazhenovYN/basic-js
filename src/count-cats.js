/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  const cat = '^^';
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
        acc += countCats(curr);
    } else if (curr === cat) {
        acc++;
    }
    return acc;
  }, 0) 
}

module.exports = {
  countCats
};
