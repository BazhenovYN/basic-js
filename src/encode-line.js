/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let currentChar = '';
  const len = str.length;
  str.split('').reduce((acc, char, index) => {
    if (currentChar != char) {
      if (acc) {
        result += acc > 1 ? `${acc}${currentChar}` : `${currentChar}`;
      }
      currentChar = char;
      acc = 1;
    } else {
      acc++;
    }

    if (index === len - 1) {
      result += acc > 1 ? `${acc}${currentChar}` : `${currentChar}`;
    }

    return acc;
  }, 0);
  return result;
}

module.exports = {
  encodeLine
};
