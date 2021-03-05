const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
      
      if (Array.isArray(arr[i])) {
        let num = 1;
        num +=this.calculateDepth(arr[i]);
        count = Math.max(num, count)
      }
    }
    return count;
  }
};
