exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    var newFn = fn.bind(obj);
    return newFn();
  },

  functionFunction: function(str) {
    return function(anotherStr){
      return str + ', ' + anotherStr;
    }
  },

  makeClosures: function(arr, fn) {
    var makeFn = function(val){
      return function(){
        return fn(val);
      }
    };
    return arr.map(function(item){
      return makeFn(item);
    })
  },

  partial: function(fn, str1, str2) {
    return function(message){
      return fn(str1, str2, message)
    }
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.reduce(function(a, b){
        return a + b;
    }, 0);
  },

  callIt: function(fn) {
    var args = [].slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    //freaking awesome
    var args = Array.prototype.slice.call(arguments, 1)
    return function(){
      var remainingArgs = Array.prototype.slice.call(arguments) 
      return fn.apply(null, args.concat(remainingArgs))
    };
  },

  curryIt: function(fn) {
    //console.dir(arguments);
    
  }
};
