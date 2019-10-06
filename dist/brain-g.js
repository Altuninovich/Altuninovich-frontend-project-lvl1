#!/usr/bin/env node
"use strict";

console.log('Welcome to the Brain Games!');

var g = function g(x, y) {
  return function (f) {
    return f(y, x);
  };
};

var i = g(2, 3);
console.log(i);