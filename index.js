'use strict';

const throost = {
  makeTransformIterator: require('./src/make-transform-iterator'),
  makeFilterIterator:    require('./src/make-filter-iterator'),
  makeZipIterator:       require('./src/make-zip-iterator'),
  makeObjectIterator:    require('./src/make-object-iterator'),
  toArray:               require('./src/to-array'),
  reduce:                require('./src/reduce'),
  map:                   require('./src/map'),
  begin:                 require('./src/begin')
};

module.exports = throost;