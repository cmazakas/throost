'use strict';

const TransfromIterator = function(iterable, f) {
  const it = iterable[Symbol.iterator]();

  this.next = () => {
    const { value, done } = it.next();
    return { value: f(value), done };
  };
};

/**
 * Creates an iterator that enables lazy transformation of any
 * iterator-returning object
 *
 * @param {Iterable} iterable Any object that supports the iteratable protocol
 * @param {Function} f A callable that is invoked with the values of the iterable
 * @return {TransfromIterator} Iterator that only transforms values upon traversal
 */
const makeTransformIterator = (iterable, f) => new TransfromIterator(iterable, f);

module.exports = makeTransformIterator;