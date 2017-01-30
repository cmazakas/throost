'use strict';

const ZipIterator = function(...args) {
  const its = args.map((arg) => arg[Symbol.iterator]());

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
 * an array of structures <br/> <br/>
 *
 * Each dereference of the iterators yields an array of
 * the values, where the order of the values matches the
 * order of the supplied iterators as they were passed in
 *
 * @param {Iterators} ...args Iterators to simultaneously traverse
 * @return {ZipIterator} Iterator over several sequences
 */
const makeZipIterator = (...args) => new ZipIterator(...args);

module.exports = makeZipIterator;