exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
   return fn.apply(null, arr);
   //or return fn.apply(null, arr);
   //or return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
   return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(a) {
      return str + ', ' + a;
    }
  },

  makeClosures: function(arr, fn) {
    //No Solution yet
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function(a) {
    // return Array.prototype.slice.call(arguments).reduce(function(a,b) {
    //   return a + b;
    // })
      var sum = 0;
    for(var i =0;i<arguments.length;i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var arguments = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, arguments)
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {
    //No Solution
  }
};
