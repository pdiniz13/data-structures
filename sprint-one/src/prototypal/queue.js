/**
 *
 * @returns {queueMethods}
 * @constructor
 */
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.start = 0;
  instance.end = 0;
  return instance;
};
/**
 *
 * @type {{enqueue: Function, dequeue: Function, size: Function}}
 * Creates methods for the Queue function
 */
var queueMethods = {
  enqueue: function(value){
    this[this.end++] = value;
  },

  dequeue: function(){
    return this[this.start++];
  },

  size: function(){
    return Math.max(0, this.end - this.start);
  }
};
