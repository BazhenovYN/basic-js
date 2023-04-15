/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let excIndexes = arr.reduce((acc, curr, index) => {
    if (curr === -1) {
      acc.push(index);
    }
    return acc;
  }, []);

  const result = arr.filter(curr => curr != -1).sort((a, b) => a - b);
  excIndexes.forEach(index => {
    result.splice(index, 0, -1)
  });
  
  return result;
}

module.exports = {
  sortByHeight
};
