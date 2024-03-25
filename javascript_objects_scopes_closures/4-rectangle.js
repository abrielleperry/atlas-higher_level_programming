#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      return 'Rectangle {}';
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }

  rotate() {
    const turn = this.width;
    this.width = this.height;
    this.height = turn;
    }

  double() {
    this.width *= 2;
    this.height *= 2;
  }
}
  module.exports = Rectangle;
