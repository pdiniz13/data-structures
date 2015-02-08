/**
 *
 * @constructor for HashTable
 */
var HashTable = function(){
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

/**
 *
 * @param k
 * @param v
 * creates insert method for HashTable
 */
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var check = false;
  if(this._storage.get(i) !== null && this._storage.get(i) !== undefined) {
    for (var x = 0, count = this._storage.get(i).length; x < count; x++) {
      if (this._storage.get(i)[x][0] === k) {
        this._storage.get(i)[x][1] = v;
        check = true;
      }
    }
    if(!check) {
      this._storage.get(i).push([k, v]);
      this._count++;
    }
  }
  else {
    this._storage.set(i, [[k, v]]);
    this._count++;
  }
  if (this._count > this._limit * 0.75){
    this._limit = this._limit * 2;
    this._count = 0;
    this.reset();
  }
};


/**
 *
 * @param k
 * @returns {*}
 * creates insert method for HashTable
 */
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) !== null && this._storage.get(i) !== undefined) {
    for (var x = 0, count = this._storage.get(i).length; x < count; x++) {
      if (this._storage.get(i)[x][0] === k) {
        return this._storage.get(i)[x][1];

      }
    }
  } else {
    return null;
  }
};

/**
 *
 * @param k
 * creates remove method for HashTable
 */
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var x = 0, count = this._storage.get(i).length; x < count; x++) {
    if(this._storage.get(i)[x][0] === k) {
      this._storage.get(i)[x][1] = null;
    }
  }
  this._count--;
  if(this._count < this._limit * 0.25){
    this._limit = this._limit / 2;
    this._count = 0;
    this.reset();
  }
};

/**
 * Creates reset method for Hastable
 */
HashTable.prototype.reset = function(){
  var tempArray = this._storage;
  this._storage = LimitedArray(this._limit);
  var context = this;
  tempArray.each(function(bucket){
    if(bucket){
      for (var i = 0, count = bucket.length; i < count; i++) {
        if(bucket[i][1] !== null) {
          context.insert(bucket[i][0], bucket[i][1]);
        }
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * retrieve, remove, insert are constant, and is linear if there is collision. reset is exponent.
 */


