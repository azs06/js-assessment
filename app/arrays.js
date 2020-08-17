exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      return arr.reduce(function(a, b){
        return a + b;
      },0);
  },

  remove: function(arr, item) {
      return arr.filter(function(arrayItem){
          return arrayItem !== item;
      });
  },

  removeWithoutCopy: function(arr, item) {
    arr = arr.sort();
      for(var i = arr.length - 1; i--;){
        if(arr[i] === item) arr.splice(i, 1);
  			console.log(arr);
      }
    return arr;
  },

  append: function(arr, item) {
      arr[arr.length] = item;
      return arr;
  },

  truncate: function(arr) {
      return arr.slice(0, arr.length - 1);
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
      return [].concat.call(arr1, arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0 , item);
      return arr;
  },

  count: function(arr, item) {
      return arr.filter(function(arrItem){
        return arrItem === item
      }).length;
  },

  duplicates: function(arr) {
      return arr.filter(function(item, index, array){
        return array.indexOf(item) !== index;
      }).filter(function(item, index, array){
        return array.indexOf(item) == index;
      });
  },

  square: function(arr) {
    return arr.map(function(number){
      return Math.pow(number, 2);
    });

  },

  findAllOccurrences: function(arr, target) {
    var result = [];
    arr.forEach(function(item, index){
      if(item === target) result.push(index);
    });
    return result;
  }
};
