var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.end++] = value;
};

Queue.prototype.size = function(){
  return Math.max(0, this.end - this.start);
};

Queue.prototype.dequeue = function(){
  return this[this.start++];
};

// Queue.prototype = {
//   enqueue: function(value){
//     this[this.end++] = value;
//   },

//   dequeue: function(){
//     return this[this.start++];
//   },

//   size: function(){
//     return Math.max(0, this.end - this.start);
//   }
// };