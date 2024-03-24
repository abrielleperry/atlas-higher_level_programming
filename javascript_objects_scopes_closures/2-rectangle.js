#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;

    if (this.width <= 0) {
      return undefined;
    }
    if (this.height <= 0) {
      return undefined;
    }
  }
}
module.exports = Rectangle;
