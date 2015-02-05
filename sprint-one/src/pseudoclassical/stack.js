var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.end = 0;
};

Stack.prototype.push = function(value){
  this[this.end++] = value;
};

Stack.prototype.size = function(){
  return this.end;
};

Stack.prototype.pop = function() {
      if(this.end>0){
      var value = this[--this.end];
      delete this[this.end];
      return value;
    }
};