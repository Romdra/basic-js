const CustomError = require("../extensions/custom-error"); 

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string') {
    let num = Number(sampleActivity) 
    if (num > 0 && num <= 15 && num != NaN) {  
      let t = Math.log(MODERN_ACTIVITY / num) / k;    
      return Math.ceil(t);
    } else {
      return false
    } 
  } else {
    return false
  } 
 };