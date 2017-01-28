'use strict';

const assert             = require('assert');
const makeFilterIterator = require('../src/make-filter-iterator');

describe('The filter iterator', () => {
  it('should filter based on a unary predicater', () => {
    const x = Object.freeze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const isEven = (x) => x % 2 === 0;

    const filterIterator = makeFilterIterator(x, isEven);

    const filteredVals = Array.from({ [Symbol.iterator]() { return filterIterator; } });

    assert.deepEqual(filteredVals, [0, 2, 4, 6, 8]);
  });
});