const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = options.addition,
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|',
      res = '',
      arr = [],
      addArr = [];

  if (typeof (str) !== "string") {
    str = String(str);
  }

  if (typeof (addition) !== "string" && typeof (addition) !== "undefined") {

    addition = String(addition);
  }

  for (let i = 0; i < repeatTimes; i++) {
    arr[i] = str;
  }
  for (let j = 0; j < additionRepeatTimes; j++) {
    addArr[j] = addition;
  }

  let add = addArr.join(additionSeparator);
  res = arr.join(add + separator) + add;

  return res;
}
  