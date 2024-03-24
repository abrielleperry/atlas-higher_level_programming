#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;

    if (this.width <= 0) {
      return null;
    }
    if (this.height <= 0) {
      return null;
    }
  }
}
module.exports = Rectangle;
