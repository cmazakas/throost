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
 *
 * @example
 * const x      = [0, 1, 2, 3, 4, 5, 6, 7];
 * const isEven = (x) => x % 2 === 0;
 *
 * const it = makeFilterIterator(isEven, begin(x));
 *
 * // prints 0, 2, 4, 6 on separate lines
 * forEach(console.log, it);
 */
const makeFilterIterator = (pred, it) => new FilterIterator(pred, it);

module.exports = makeFilterIterator;