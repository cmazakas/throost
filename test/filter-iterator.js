'use strict';

const assert = require('assert');

const { makeFilterIterator, toArray, begin } = require('..');

describe('The filter iterator', () => {
  it('should filter based on a unary predicate', () => {
    const x = Object.freeze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const isEven = (x) => x % 2 === 0;

    const filteredVals = 
      toArray(
        makeFilterIterator(
          isEven, begin(x)));

    assert.deepEqual(filteredVals, [0, 2, 4, 6, 8]);
  });
});