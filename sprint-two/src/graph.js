var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node] = [];
};

Graph.prototype.contains = function(node){
  return this[node] !== undefined;
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  this[toNode].splice(this[fromNode].indexOf(fromNode), 1);
};

Graph.prototype.forEachNode = function(cb){
  for(var node in this){
    if(Array.isArray(this[node])) {
      cb(node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * each, remove, hasEdge are linear. The rest are constant.
 */



