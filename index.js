'use strict';

const throost = {
  makeTransformIterator: require('./src/make-transform-iterator'),
  makeFilterIterator:    require('./src/make-filter-iterator'),
  makeZipIterator:       require('./src/make-zip-iterator'),
  toArray:               require('./src/to-array')
};

module.exports = throost;