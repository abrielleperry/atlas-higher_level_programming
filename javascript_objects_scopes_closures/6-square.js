#!/usr/bin/node
const Rectangle = require('./5-square.js');
class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
    charPrint(c) {
      for (var i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
        for (c === undefined)
        }
      }
  }
}
module.exports = Square;
