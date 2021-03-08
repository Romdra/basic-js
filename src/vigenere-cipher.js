const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (mode = true){
    this.mode = mode
  }

  encrypt(txt, key) {
    const a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

    txt = txt.toUpperCase();
    key = key.toUpperCase();

    let arr = [];
    let j = 0;
  
    for (let i = 0; i < txt.length; i++) {
      if (a.indexOf(txt[i]) == -1) {
        arr.push(txt[i]);
        continue;
      }

      let k = a[(a.indexOf(txt[i]) + a.indexOf(key[j])) % 26]
      j++

       if (j == key.length) {
        j = 0;
      } 

      arr.push(k);
    }

    if(!this.mode) {
      arr.reverse();
    }

    return arr.join('');

  }

  decrypt(txt, key) {
    const a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

    txt = txt.toUpperCase();
    key = key.toUpperCase();

    let arr = [];
    let j = 0;
  
    for (let i = 0; i < txt.length; i++) {
      if (a.indexOf(txt[i]) == -1) {
        arr.push(txt[i]);
        continue;
      }

    let res = a.indexOf(txt[i]) - a.indexOf(key[j]);
    if ( res < 0 ) { res += 26 }
    
    let k = a[res];
    j++
    if (j == key.length) {
      j = 0;
    } 

    arr.push(k);
  }

  if(!this.mode) {
    arr.reverse();
  }

  return arr.join('');

 }
}

module.exports = VigenereCipheringMachine;




