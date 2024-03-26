#!/usr/bin/node
exports.esrever = function (list) {
    return list.reduce((newList, item) => [item].concat(newList), []);
  };
