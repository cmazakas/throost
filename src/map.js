'use strict';

/**
 * Maps a function f over the iterator it, returning an array of the results
 *
 * <br/> <br/>
 *
 * Should not be used on indefinite iterators
 *
 * @param {Function} f
 * @param {Iterator} it
 * @return {Array} Array of values from f(it.next().value)
 * 
 * @example
 *
 * const double = (x) => x * 2;
 * const vals   = function*() {
 *   for (let i = 0; i < 5; ++i) {
 *     yield i;
 *   } 
 * };
 *
 * const it = makeTransformIterator(double, vals());
 *
 * // prints 0
 * console.log(it.next().value);
 *
 * // prints 2
 * console.log(it.next().value);
 *
 * // prints 4
 * console.log(it.next().value);
 *
 * // prints 6
 * console.log(it.next().value);
 *
 * // ...
 */
const map = (f, it) => {
  const vals = [];

  let { value, done } = it.next();
  while (!done) {
    vals.push(f(value));

    const tmp = it.next();
    value = tmp.value;
    done  = tmp.done;
  }

  return vals;
};

module.exports = map;