/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    const curr = Object.assign([], arr);
    curr.splice(i, 1);
    result.push(Number(curr.join('')));
  }
  result.sort((a, b) => b - a);
  return result[0];
}

module.exports = {
  deleteDigit
};
