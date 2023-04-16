const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.getLength() ||
      position < 1
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.chain.map((elem) => `( ${elem} )`).join('~~');
    this.chain = [];
    return finishChain;
  },
};

module.exports = {
  chainMaker
};
