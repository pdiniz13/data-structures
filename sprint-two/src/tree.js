var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var returnValue = false;
  var recursiveFunction = function(target, position) {
    if (position.value === target) {
      returnValue = true;
      return;
    }
    if(position.children !== undefined) {
      for (var i = 0, count = position.children.length; i < count; i++) {
        recursiveFunction(target, position.children[i]);
      }
    }
  };
  recursiveFunction(target, this);
  return returnValue;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is constant. Contains is linear.
 */

