exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer = null;
    (function doIt(){
      console.log(start++);
      if(start <= end){
        timer = setTimeout(doIt, 100);
      }
    }())
    return{
      cancel: function(){
        clearTimeout(timer);
      }
    }
  }
};
