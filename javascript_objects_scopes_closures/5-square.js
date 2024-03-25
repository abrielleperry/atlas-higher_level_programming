#!/usr/bin/node
const Rectangle = require('./4-rectangle'); // import Rectangle class from 4 file
class Square extends Rectangle {
  constructor (size) {
    super(size, size); // calls the parent class(Rec) constructor with size as w and h
  }
}
module.exports = Square;
