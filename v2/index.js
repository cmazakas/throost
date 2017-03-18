'use strict';

// mutates the supplied iterator
module.exports = (it) => {
  
  const functions = [];

  return {
    filter(f) { functions.push({ filterCall: f }); return this; },
    map(f)    { functions.push({ mapCall:    f }); return this; },

    next() {
      let { value, done } = it.next();

      if (done) { 
        return ({ value, done }); 
      }

      for (const { filterCall, mapCall } of functions) {
        if (done) {
              break; 
        }

        if (filterCall) {
          if (!filterCall(value)) {
            const tmp = it.next();
            
            value = tmp.value;
            done  = tmp.done;
          }
        } else {
          value = mapCall(value);
        }
      }

      return { value, done };
    }
  };
};