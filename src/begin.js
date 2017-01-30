'use strict';

/**
 * Returns an iterator pointing to the beginning of an iterable type
 *
 * @param {Iterable} iterable Any type that supports the operation, `o[Symbol.iterator]()`
 */
const begin = (iterable) => iterable[Symbol.iterator]();

module.exports = begin;