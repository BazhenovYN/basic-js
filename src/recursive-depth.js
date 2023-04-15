/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach((curr) => {
      if (Array.isArray(curr)) {
        maxDepth = Math.max(this.calculateDepth(curr) + 1, maxDepth);
      }
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
