'use strict';

const assert = require('assert');

const { reduce,
        makeZipIterator,
        makeTransformIterator,
        makeFilterIterator,
        begin } = require('..');

const add = (x, y) => x + y;

describe('The reduction function', () => {
  it('should reduce over an iterator', () => {
    const range = (function*() {
          for (let i = 0; i < 5; ++i) {
            yield i;
          }
    })();

    const sum = reduce(add, 0, range);

    // 0 + 1 + 2 + 3 + 4 = 10
    assert.deepEqual(sum, 10);
  });

  it('should support a fancy iterator (zip)', () => {
    const x = ['a', 'd', 'g'];
    const y = ['b', 'e', 'h'];
    const z = ['c', 'f', 'i'];

    const concat = (x, y) => x.concat(y);
    const xyz    = reduce(concat, [], makeZipIterator(...[x, y, z].map(begin)));

    assert.deepEqual(xyz.join(''), 'abcdefghi');
  });

  it('should support a fancy iterator (transform)', () => {
    const range = function*() {
      for (let i = 0; i < 5; ++i) {
        yield i;
      }
    };

    const sum = reduce(
      add, 0, 
      makeTransformIterator(
        x => x * 2, 
        range()));

    // 0 * 2 + 1 * 2 + 2 * 2 + 3 * 2 + 4 * 2
    // 0 + 2 + 4 + 6 + 8
    // 20
    assert.deepEqual(sum, 20);
  });

  it('should support a fancy iterator (filter)', () => {
    const range = function*() {
      for (let i = 0; i < 10; ++i) {
        yield i;
      }
    };

    const isEven = (x) => x % 2 === 0;
    const add    = (...args) => args.reduce((total, value) => total + value, 0);

    const sum = reduce(add, 0, makeFilterIterator(isEven, range()));

    // 0 + 2 + 4 + 6 + 8
    assert.deepEqual(20, sum);
  });
});