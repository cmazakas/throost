'use strict';
/**
 * Helper function that takes an iterator and iterates
 * its length, gathering the result in an array
 *
 * Should not be used on indefinite iterators
 *
 * @param {Iterator} Iterator which is mutatively iterated to its end
 * @return {Array} An array containing the `value`s of each iteration
 */
const toArray = (it) => Array.from({ [Symbol.iterator]() { return it; } });

module.exports = toArray;