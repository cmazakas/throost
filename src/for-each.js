'use strict';

/**
 * Invokes a callable over a range pointed at by an
 * iterator
 *
 * @param {Function} f Callable-type
 * @param {Iterator} it Iterator-type
 */
const forEach = (f, it) => {
  let { value, done } = it.next();

  while (!done) {
    f(value);

    const tmp = it.next();
    value     = tmp.value
    done      = tmp.done;
  }
};

module.exports = forEach;