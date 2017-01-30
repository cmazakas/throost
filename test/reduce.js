'use strict';

const assert = require('assert');

const { reduce, 
        makeZipIterator,
        makeTransformIterator,
        genToIterable } = require('..');

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
    const xyz    = reduce(concat, [], makeZipIterator(x, y, z));

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
        genToIterable(range), 
        x => x * 2));

    // 0 * 2 + 1 * 2 + 2 * 2 + 3 * 2 + 4 * 2
    // 0 + 2 + 4 + 6 + 8
    // 20
    assert.deepEqual(sum, 20);
  });
});