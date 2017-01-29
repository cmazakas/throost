'use strict';

const assert          = require('assert');
const { makeZipIterator, toArray } = require('..');

describe('The zip iterator', () => {
  it('should iterate a variadic list of iterables', () => {
    const evens = [0, 2, 4, 8];
    const odds  = [1, 3, 5, 7];

    const zipIterator = makeZipIterator(evens, odds);

    for (let i = 0; i < evens.length; ++i) {
      assert.deepEqual(zipIterator.next().value, [evens[i], odds[i]]);
    }
  });

  it('should work with arbitrary iterables', () => {
    const evens = [0, 2, 4, 8];
    const odds  = new Set([1, 3, 5, 7]);

    const zipIterator = makeZipIterator(evens, odds);

    assert.deepEqual(
      toArray(zipIterator),
      [
        [0, 1],
        [2, 3],
        [4, 5],
        [8, 7]
      ]);
  });

  it('should preserver argument ordering', () => {
    const nums  = [  0,   1,   2,   3,   4,   5];
    const chars = ['a', 'b', 'c', 'd', 'e', 'f'];
    const nums2 = new Set([0, 1, 2, 3, 4, 5]);
    const nums3 = function*() { 
      for (let i = 0; i < 6; ++i) { 
        yield (i * 3); 
      } 
    };

    const zipIterator = makeZipIterator(nums, chars, nums2, nums3());

    assert.deepEqual(
      toArray(zipIterator),
      [
        [0, 'a', 0, 0],
        [1, 'b', 1, 3],
        [2, 'c', 2, 6],
        [3, 'd', 3, 9],
        [4, 'e', 4, 12],
        [5, 'f', 5, 15]
      ]);
  });
});