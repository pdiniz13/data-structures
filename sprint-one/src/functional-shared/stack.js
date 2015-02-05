var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage:{
      end:0
    }
  };
  _.extend(someInstance, stackMethods);
  return someInstance
};

var stackMethods = {
  push: function(value){
    this.storage[this.storage.end++] = value;
  },
  pop: function(){
    if(this.storage.end>0){
      var value = this.storage[--this.storage.end];
      delete this.storage[this.storage.end];
      return value;
    }
  },
  size: function(){
    return this.storage.end;
  }
};

