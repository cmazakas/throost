'use strict';

const FilterIterator = function(pred, it) {
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
 * @param {Function} pred Unary predicate used for determining valid values of the underlying sequence
 * @param {Iterator} it Iterator-type
 * @return {FilterIterator}
 */
const makeFilterIterator = (pred, it) => new FilterIterator(pred, it);

module.exports = makeFilterIterator;