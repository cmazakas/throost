'use strict';

/**
 * Reduction function for a given iterator
 *
 * <br/> <br/>
 *
 * Should not be used on indefinite iterators
 *
 * @param {Function} f Binary function whose first argument is the accumulated total and second argument is the current dereferenced value
 * @param {*} init Initial value for the reduction
 * @param {Iterator} it Iterator to be traversed
 * @return {*} Returns the accumulated value
 */
const reduce = (f, init, it) => {
  let acc = init;
  let { value, done } = it.next();

  while (!done) {
    acc = f(acc, value);

    const tmp = it.next();
    value = tmp.value;
    done  = tmp.done;
  }

  return acc;
};

module.exports = reduce;