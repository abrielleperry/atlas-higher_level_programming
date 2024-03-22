#!/usr/bin/node
function factorial (n) {
  if (!Number.isInteger(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
