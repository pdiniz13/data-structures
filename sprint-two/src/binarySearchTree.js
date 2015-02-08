/**
 *
 * @param value
 * @constructor
 */
var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;
  this.parent = null;
};

/**
 *
 * @param value
 * Creates an insert method for BinarySearchTree
 */
BinarySearchTree.prototype.insert = function(value){
  if(this.value > value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
     this.left.insert(value);
    }
  } else {
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

/**
 *
 * @param value
 * @returns {boolean}
 * Creates a contains method for BinarySearchTree;
 */
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){
    return true;
  } else if(this.value > value){
    if(this.left){
      return this.left.contains(value);
    }
    return false;
  } else {
    if(this.right) {
      return this.right.contains(value);
    }
    return false;
  }
};

/**
 *
 * @param cb
 * Creates a depthFirstLog for BinarySearchTree
 */
BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(cb);
  }
  if(this.right !== null){
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert and contains are logarithmic, depthfirstlog is linear
 */
