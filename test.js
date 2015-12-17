/* eslint-disable func-names */
'use strict';

var diffArrayObjsByProp = require('./');
var it = require('tape');

it('should output correct diff', function(t) {
  var a = [{
    a: 1, b: 2, c: 3, id: 0
  }, {
    a: 1, b: 2, c: 3, id: 1
  }, {
    a: 1, b: 2, c: 3, id: 2
  }];

  var b = [{
    a: 1, b: 2, c: 3, id: 9
  }, {
    a: 1, b: 2, c: 3, id: 1
  }, {
    a: 1, b: 2, c: 3, id: 2
  }, {
    a: 1, b: 2, c: 3, id: 3
  }];


  var diff = diffArrayObjsByProp(a, b, 'id');

  t.deepEqual(diff.added, [ b[0], b[3] ]);
  t.deepEqual(diff.removed, [ a[0] ]);

  t.ok(!diff.common);

  t.end();
});

it('should return common elements if specified', function(t) {
  var a = [{
    a: 1, b: 2, c: 3, id: 0
  }, {
    a: 1, b: 2, c: 3, id: 1
  }, {
    a: 1, b: 2, c: 3, id: 2
  }];

  var b = [{
    a: 1, b: 2, c: 3, id: 9
  }, {
    a: 1, b: 2, c: 3, id: 1
  }, {
    a: 1, b: 2, c: 3, id: 2
  }, {
    a: 1, b: 2, c: 3, id: 3
  }];


  var diff = diffArrayObjsByProp(a, b, 'id', true);

  t.deepEqual(diff.common, [ a[1], a[2] ]);

  t.end();
});
