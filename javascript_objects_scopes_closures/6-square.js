#!/usr/bin/node
const Square = require('./5-square.js');
class Square extends Square {
    constructor(size) {
      super(size, size);
    }
    charPrint(c = 'X') {
  }
}
module.exports = Square;
