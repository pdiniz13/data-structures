/**
 *
 * @constructor
 */
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.end = 0;
};

/**
 *
 * @param value
 * Creates method push for the Stack function
 */
Stack.prototype.push = function(value){
  this[this.end++] = value;
};

/**
 *
 * @returns {number}
 * Creates method size for the Stack function
 */
Stack.prototype.size = function(){
  return this.end;
};

/**
 *
 * @returns {*}
 * Creates method pop for the Stack function
 */
Stack.prototype.pop = function() {
      if(this.end>0){
      var value = this[--this.end];
      delete this[this.end];
      return value;
    }
};