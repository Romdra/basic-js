const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) {throw new Error()}
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] == "--double-prev" && i == 0) ||
      (arr[i] == "--discard-prev" && i == 0) ||
      (arr[i] == "--double-next" && i == arr.length - 1) ||
      (arr[i] == "--discard-next" && i == arr.length - 1)
        ) {
          continue;
        }
       
      switch(arr[i]){
        case '--double-prev':
          if(arr[i - 2] != '--discard-next'){
            newArr.push(arr[i - 1])
          } 
          break;
        case '--discard-prev':
          if(arr[i - 2] != '--discard-next'){
            newArr.pop()
          } 
          break;
        case '--double-next':
          newArr.push(arr[i + 1])
          break;
        case '--discard-next':
          if (arr[i + 2] != '--double-prev') {
            i += 1;
          } else {
            i += 2;
          }
          break; 

        default: 
         newArr.push(arr[i])
          break;
      }     
    }
  return newArr;
};
