'use strict';

const ZipIterator = function(...args) {
  const its = args;

  this.next = () => {
    const derefs = its.map((it) => it.next());

    const done  = derefs[0].done;
    const value = derefs.map((deref) => deref.value);

    return { value, done };
  };
};

/**
 * Iterate over a variadic number of iterators in a single
 * pass. Useful for creating a structure of arrays vs
 * an array of structures approach
 *
 * <br/> <br/>
 *
 * Each dereference of the iterators yields an array of
 * the values, where the order of the values matches the
 * order of the supplied iterators as they were passed in
 *
 * @param {...Iterators} args Iterators to simultaneously traverse
 * @return {ZipIterator} Iterator over several sequences
 *
 * @example
 * 
 * const x = [0, 1, 2, 3];
 * const y = new Set([4, 5, 6, 7]);
 * const z = function*() {
 *   for (let i = 0; i < 4; ++i) yield i * i; 
 * };
 *
 * const it = makeZipIterator(begin(x), begin(y), z());
 *
 * forEach(console.log, it);
 * // prints
 * // [0, 4, 0]
 * // [1, 5, 1]
 * // [2, 6, 4]
 * // [3, 7, 9]
 */
const makeZipIterator = (...args) => new ZipIterator(...args);

module.exports = makeZipIterator;