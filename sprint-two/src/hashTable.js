/**
 *
 * @constructor for HashTable
 */
var HashTable = function(){
  this._limit = 8;
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
  if(this._storage.get(i) !== null && this._storage.get(i) !== undefined){
    if(this._storage.get(i+1) !== null && this._storage.get(i+1) !== undefined){
      this._limit = this._limit * 2;
      var _tempStorage = LimitedArray(this._limit);
      for (var i = 0, count = this._storage.length; i < count; i++) {
        var key = this._storage.get(i)[0];
        var value = this._storage.get(i)[1];
        var index = getIndexBelowMaxForKey(key, this._limit);
        _tempStorage.set(index, [key, value]);
      }
      this._storage = _tempStorage;
    } else {
      this._storage.set(i+1, [k,v]);
    }
  } else {
    this._storage.set(i, [k, v]);
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
  if(this._storage.get(i) !== null) {
    if(this._storage.get(i)[0] === k) {
      return this._storage.get(i)[1];
    } else {
      return this._storage.get(i+1)[1];
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
  var x = null;
  this._storage.set(i, x);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
