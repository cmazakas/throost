
# Throost

[![Join the chat at https://gitter.im/LeonineKing1199/throost](https://badges.gitter.im/LeonineKing1199/throost.svg)](https://gitter.im/LeonineKing1199/throost?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Throost is a Node.js port of the iterator adapater pattern found in
C++ libraries like Boost and Thrust. This pattern of programming can
also be seen in Rust code as well (their iterators mimic JS the most).

An iterator adapter is a simple wrapper around an iterator that alters
the behavior of it while still adhering to the iterator protocol.

Throost supports indefinite sequences as well. However, some algorithms
expect a finite iterator so calling these functions with iterators that
do not end will create indefinite loops.

## How to Use this Library

### Iterator Philosophy

Iterators are a powerful concept present in C++. While C++ libraries may be the primary
inspiration for this module, they are an entirely different beast in JavaScript.

JavaScript iterators represent lazy sequences and Throost is based around that.

From this stems the concept of a _range_ which is an iterator that terminates. Because
generators may yield an arbitrary number of elements, a sequence-based operation is one
that is purely lazy while a range-based operation is an eager evaluation.

In Thrust, a range-based operation is `reduce` or `toArray`. A sequence-based operation would simply
be advancing the iterator by calling the `next` method on the iterator.

### Composition and Transduction

One of the boons of Thrust is its ease of composability and the delayed execution of functions.

Currently, most application logic can be encapsulated by simple value transformations and selective
filtering. To this end, Throost has `makeTransformIterator` and `makeFilterIterator` to enable this
mechanism. Each call to such functions wraps the traversal of an iterator in transformation or filtering
logic.

Throost v2 will instead opt for a jQuery style of programming which will look much more like this:
```js
  it('support both mapping and filtering', () => {
    const range = function*() {
      for (let i = 0; i < 10; ++i) {
        yield i;
      }
    };

    const triple = (x) => (3 * x);
    const isEven = (x) => (x % 2 === 0);

    const it = T(range());

    it
      .filter(isEven)
      .map(triple);

    // 0, 2, 4, 6, 8 => 0, 6, 12, 18, 24
    assert.deepStrictEqual([0, 6, 12, 18, 24], toArray(it));
  });
```

By combining both filtering and transformation logic in addition to the helper function
`reduce`, making transducers is relatively straight-forward.

### Support for More Types

Throost is based on iteration which is becoming more prevalent in JavaScript.

While there are many useful and powerful libraries, not many support more generic
types. For example, Set and Map support are often excluded  from many libraries so
programmers feel less motivation to use such types as they're often converted to arrays
which can incurs memory cost (most GC languages can allocate quickly so copying is of no
concern).

Because Throost is iterator-based, it supports Set, Map, Array, String, generators and
any user-defined iterables.

### Best Practices

* favor the use of `begin` as a uniform call-syntax for iterables
* remember that traversing an iterator mutates it so prefer the use of expressions like `begin(iteratable)`
* generators can oftentimes act as immutable sources of data
* make*Iterator calls can be composed to create functional pipelines or create a new method of traversal

Documentation: https://leonineking1199.github.io/throost/
