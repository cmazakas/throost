'use strict';

const assert = require('assert');

const { map } = require('..');

describe('The map funtion', () => {
  it('should create an array of the mapped over iterator', () => {
    const set    = new Set([0, 1, 2, 3, 4, 5]);
    const double = (x) => x * 2;

    assert.deepEqual(
      map(set[Symbol.iterator](), double),
      [0, 2, 4, 6, 8, 10]
    );
  });
});