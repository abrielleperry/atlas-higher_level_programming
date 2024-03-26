#!/usr/bin/node
let counter = 0;
exports.logMe = function (item) {
  counter += item.length;
  console.log({counter} + ':' + {item});
}
