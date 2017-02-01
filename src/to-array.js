'use strict';
/**
 * Helper function that takes an iterator and iterates
 * its length, gathering the result in an array 
 *
 * <br/> <br/>
 *
 * Should not be used on indefinite iterators
 *
 * @param {Iterator} it Iterator which is mutatively iterated to its end
 * @return {Array} An array containing the `value`s of each iteration
 *
 * @example
 *
 * const range = function*() {
 *   for (let i = 0; i < 10; ++i) yield i;
 * };
 *
 * // prints [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * console.log(toArray(range()));
 */
const toArray = (it) => Array.from({ [Symbol.iterator]() { return it; } });

module.exports = toArray;