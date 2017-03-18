'use strict';

const T      = require('../v2');
const assert = require('assert');

const { toArray, begin } = require('..');

describe('The version 2 of the module', () => {

  it('should support simple iteration', () => {
    const x = [0, 1, 2, 3];

    assert.deepStrictEqual(x, toArray(T(begin(x))));
  });


  it('should support mapping operations', () => {
    const x = [0, 1, 2, 3];

    const f = (x) => (2 * x);

    const it = T(begin(x)).map(f);

    assert.deepStrictEqual(x.map(f), toArray(it));
  });

  it('should support filtering as well', () => {
    const range = function*() {
      for (let i = 0; i < 10; ++i) {
        yield i;
      }
    };

    const isEven = (x) => (x % 2 === 0);

    const it = T(range()).filter(isEven);

    assert.deepStrictEqual([0, 2, 4, 6, 8], toArray(it));
  });

  it('support both mapping and filtering', () => {
    const range = function*() {
      for (let i = 0; i < 10; ++i) {
        yield i;
      }
    };

    const triple = (x) => (3 * x);
    const isEven = (x) => (x % 2 === 0);

    const it = T(range());

    it
      .filter(isEven)
      .map(triple);

    // 0, 2, 4, 6, 8 => 0, 6, 12, 18, 24
    assert.deepStrictEqual([0, 6, 12, 18, 24], toArray(it));
  });
});