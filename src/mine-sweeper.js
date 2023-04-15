/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  function checkMines(i, j) {
    let count = 0;
    for (let n = -1; n <= 1; n++) {
      for (let k = -1; k <= 1; k++) {
        if (n === 0 && k === 0) {
          continue;
        }
        if (i + n >= 0 && j + k >= 0 && i + n < matrix.length && j + k < matrix[i].length) {
          if (matrix[i + n][j + k]) {
            count++;
          }
        }
      }
    }
    return count;
  }

  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = checkMines(i, j);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
