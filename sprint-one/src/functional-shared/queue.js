var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    start:0,
    end:0
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this[this.end++] = value;
  },
  dequeue: function(){
    return this[this.start++];
  },
  size: function(){
    return Math.max(this.end-this.start, 0);
  }
};



