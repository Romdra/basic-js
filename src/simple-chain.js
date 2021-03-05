const CustomError = require("../extensions/custom-error");



 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`)
      return this
  },
  removeLink(position) {
    if ( position == '' || isNaN(+position) || this.chain[position] == undefined) {
      this.chain = []
      throw new Error()
    }
    else {
    this.chain.splice(position - 1, 1)
    return this
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const newChain = this.chain.join('~~')
    this.chain = []
    return newChain
  }
}; 

module.exports = chainMaker;
