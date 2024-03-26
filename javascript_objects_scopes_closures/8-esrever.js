#!/usr/bin/node
exports.esrever = function (list) {
  var newList = '';
  for (var i = list.length - 1; i >= 0; i--) {
    newList += list[i];
  }
  return newList;
}
