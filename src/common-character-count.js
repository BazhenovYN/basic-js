/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (!s1 || !s2) {
    return 0;
  }

  let arr = s1.split('');
  return s2.split('').reduce((acc, char) => {
    const index = arr.indexOf(char);
    if (~index) {
      acc++;
      arr.splice(index, 1);
    }
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
