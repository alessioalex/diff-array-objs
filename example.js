/* eslint-disable no-console, func-names */
'use strict';

var diffArrayObjsByProp = require('./');

var a = [{
  a: 1, b: 2, c: 3, id: 0
}, {
  a: 1, b: 3, c: 3, id: 1
}, {
  a: 1, b: 3, c: 9, id: 2
}];

var b = [{
  a: 1, b: 2, c: 3, id: 0
}, {
  a: 1, b: 3, c: 3, id: 1
}, {
  a: 1, b: 3, c: 9, id: 3
}];

console.log(diffArrayObjsByProp(a, b, 'id'));
//
// Sample output:
//
// { added: [ { a: 1, b: 3, c: 9, id: 3 } ],
//   removed: [ { a: 1, b: 3, c: 9, id: 2 } ] }
