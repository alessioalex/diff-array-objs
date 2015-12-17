# diff-array-objs

Diff two arrays of objects based on a specific property.

[![Build Status](https://travis-ci.org/alessioalex/diff-array-objs.svg)](https://travis-ci.org/alessioalex/diff-array-objs)

## usage

    diffArrayObjs(firstArray, secondArray, property, shouldReturnCommon)

### example

```js
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
```

## tests

```bash
npm test
```

## license

[MIT](http://alessioalex.mit-license.org/)
