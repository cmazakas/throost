'use strict';

/**
 * Maps a function f over the iterator it
 *
 * <br/> <br/>
 *
 * Should not be used on indefinite iterators
 *
 * @param {Iterator} it
 * @param {Function} f
 * @return {Array} Array of values from f(it.next().value)
 */
const map = (it, f) => {
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