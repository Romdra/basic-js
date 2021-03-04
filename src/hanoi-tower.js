const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  let transfers = 2**disksNumber - 1;   
  let sec = Math.floor(transfers * 3600 / turnsSpeed);
  let finaly = { turns : transfers, 
                seconds: sec};
  return finaly
}; 
