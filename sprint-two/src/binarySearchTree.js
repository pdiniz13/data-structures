var BinarySearchTree = function(value){
  this.left = null;
  this.right = null;
  this.value = value;
  this.parent = null;
};

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

BinarySearchTree.prototype.contains = function(value){
  var bool = false;

  this.each(function(){
    if(this.value === value){
      bool = true;
    }
  });
  return bool;
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(cb);
    //cb.apply(this.left, arguments);

  }
  if(this.right !== null){
    this.right.depthFirstLog(cb);
    //cb.apply(this.right, arguments);
  }
};


BinarySearchTree.prototype.each = function(cb){
  cb(this.value);
  if(this.left !== null){
    cb.apply(this.left, arguments);

  }
  if(this.right !== null){
    cb.apply(this.right, arguments);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
