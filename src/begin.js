'use strict';

/**
 * Returns an iterator pointing to the beginning of an iterable type
 *
 * @param {Iterable} iterable Any type that supports the operation, `o[Symbol.iterator]()`
 * @return {Iterator} New iterator to a range
 * @example
 *
 * const x  = [0, 1, 2];
 * const it = begin(x);
 * 
 * // prints 0
 * console.log(it.next().value);
 *
 * // prints 1
 * console.log(it.next().value);
 *
 * // prints 2
 * console.log(it.next().value);
 *
 * // iterator is now 'done'
 */
const begin = (iterable) => iterable[Symbol.iterator]();

module.exports = begin;