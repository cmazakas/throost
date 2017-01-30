'use strict';

const ObjectIterator = function(obj) {
  const keys = Object.keys(obj);
  const size = keys.length;
  let   pos  = 0;

  this.next = () => {
    const key = keys[pos];
    const val = obj[key];

    return {
      value: [key, val],
      done:  (size === pos++)
    };
  };
};

/**
 * Creates an iterator out of a plain ol' JavaScript object
 *
 * @param {Object} obj Object to iterate over
 * @return {ObjectIterator} Iterator that returns an array containing a key and its value
 */
const makeObjectIterator = (obj) => new ObjectIterator(obj);

module.exports = makeObjectIterator;