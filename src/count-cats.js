/* const CustomError = require("../extensions/custom-error"); */

module.exports = function countCats(matrix) {
  const trueArr = matrix.filter(Boolean);  
  if (trueArr.flat().includes('^^')) {
    let arr = trueArr.flat().filter(el => el == '^^')
    return arr.length;
  } else {
    return 0;
  };
};




