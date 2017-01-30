'use strict';

/**
 * Unfortunately, almost everything in JavaScript has a Symbol.iterator
 * property. However, generators do not!
 *
 * <br/> <br/>
 *
 * This is a helper function that creates an iterable-conforming interface out
 * of a generator function. The iterable type will forward all supplied arguments
 * to the generator function
 * 
 * @param {GeneratorFunction} genFn
 * @return {Iterable} An object, o, that supports `o[Symbol.iterator](...args)`
 */
const genToIterable = (genFn) => ({
  [Symbol.iterator](...args) {
    return genFn(...args);
  }
});

module.exports = genToIterable;