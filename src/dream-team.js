const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let arr = members.filter(e => typeof e === 'string' || e instanceof String);
  if (!arr.length) return false
  return arr.map(el => el.trim()[0].toUpperCase()).sort().join('')
};


