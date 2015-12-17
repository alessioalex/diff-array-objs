'use strict';


/**
 * Diff two arrays of objects based on a specific property.
 *
 *    var a = [{
 *      a: 1, b: 2, c: 3, id: 0
 *    }, {
 *      a: 1, b: 3, c: 3, id: 1
 *    }, {
 *      a: 1, b: 3, c: 9, id: 2
 *    }];
 *
 *    var b = [{
 *      a: 1, b: 2, c: 3, id: 0
 *    }, {
 *      a: 1, b: 3, c: 3, id: 1
 *    }, {
 *      a: 1, b: 3, c: 9, id: 3
 *    }];
 *
 *    console.log(diffArrayObjsByProp(a, b, 'id'));
 *
 *    // { added: [ { a: 1, b: 3, c: 9, id: 3 } ],
 *    //   removed: [ { a: 1, b: 3, c: 9, id: 2 } ] }
 *
 * @constructor
 * @param {Array} a - First array of objects
 * @param {Array} b - Second array of objects
 * @param {String} compareBy - Property to compare by, such as 'id' for example.
 * @param {Boolean} [returnCommon=false] - Set to true if you want the common items to be included in the result.
 * @returns {Object} - An object with the following properties: added, removed, common (optional). All values are arrays.
 * @api public
 */
function diffArrayObjsByProp(a, b, compareBy, returnCommon) {
  var prop = compareBy || 'id';
  var res = { added: [], removed: [] };
  var common = { a: [], b: [] };
  var i = 0;
  var j = 0;

  for (i = 0; i < a.length; i++) {
    for (j = 0; j < b.length; j++) {
      if (a[i][prop] === b[j][prop]) {
        common.a.push(i);
        common.b.push(j);
        break;
      }
    }

    if (common.a[common.a.length - 1] !== i) {
      res.removed.push(a[i]);
    }
  }

  for (i = 0; i < b.length; i++) {
    if (common.b.indexOf(i) === -1) {
      res.added.push(b[i]);
    }
  }

  if (returnCommon) {
    res.common = common.a.map(function mapCommonElements(ind) {
      return a[ind];
    });
  }

  return res;
}

module.exports = diffArrayObjsByProp;
