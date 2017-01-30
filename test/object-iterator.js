'use strict';

const assert = require('assert');

const { makeObjectIterator, toArray } = require('..');

describe('The object iterator', () => {
  it('should iterate an object, returning an array of the key and value', () => {
    const o = {
      a: 0,
      b: 1,
      c: 2
    };

    assert.deepEqual(
      toArray(makeObjectIterator(o)),
      [
        ['a', 0],
        ['b', 1],
        ['c', 2]
      ]
    );
  });
});