exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sumTotal = 0;
    arr.forEach(function(elem,i) {
      sumTotal += elem;  
    });
    return sumTotal;
  },

  remove: function(arr, item) {
    var index = arr.indexOf(item);
    arr.forEach(function(elem, i) {
      if(index !== -1) {
        arr.splice(index, 1);
      }

    })
    
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    arr.forEach(function(elem, i) {
      if(index !== -1) {
        arr.splice(index, 1);
      }
      
    })
    
    return arr;
  },

  append: function(arr, item) {
    var newArr = [];
    arr.forEach(function(elem, i) {
      newArr.push(elem);
      if(newArr.length === arr.length) {
        newArr.push(item);
      }
    })	
    return newArr;
  },

  truncate: function(arr) {
    var newArr = [];
    arr.forEach(function(elem, i) {
      newArr.push(elem);
      if(newArr.length === arr.length) {
        newArr.pop(arr[arr.length]);
      }
    })	
    return newArr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    //var newArr = [];
    arr.forEach(function(elem, i) {
      if(index === (arr.length/2)) {
        arr.push(item);
      }
    })
    return arr;
    //return newArr;
  },

  count: function(arr, item) {
    var  counter = 0;
    arr.forEach(function(elem, i) {
      if(elem === item) {
        counter += 1;
      }
    })
    return counter;
  },

  duplicates: function(arr) {
    var unique = arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  })
  return unique;
  },

  square: function(arr) {
    var newArr = [];
    arr.forEach(function(elem, i) {
    newArr.push(elem*elem);
    });
    return newArr;
  },


  findAllOccurrences: function(arr, target) {
    var occurred = 0;
    var newArr = [];
    arr.forEach(function(elem, i) {
      if(elem === target) {
        newArr.push(elem);
      }
    })
    return newArr;
  }

  
};
