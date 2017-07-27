exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return this.objectsAnswers.alterContext.bind(obj);
  },

  alterObjects: function(constructor, greeting) {
    
  },

  iterate: function(obj) {

  }
};
