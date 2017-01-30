'use strict';

const FilterIterator = function(iterable, pred) {
  const it = iterable[Symbol.iterator]();

  this.next = () => {
    let { value, done } = it.next();

    while (!done && !pred(value)) {
      const tmp = it.next();
      value     = tmp.value;
      done      = tmp.done;
    }

    return { value, done };
  };
};

/**
 * Iterator adapter that yields only values that satisfy the
 * provided unary predicate
 *
 * @param {Iterable} iterable Any object that supports the iteratable protocol
 * @param {Function} pred Unary predicate used for determining valid values of the underlying sequence
 * @return {FilterIterator}
 */
const makeFilterIterator = (iterable, pred) => new FilterIterator(iterable, pred);

module.exports = makeFilterIterator;