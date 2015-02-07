/**
 *
 * @constructor
 */
var Graph = function(){
};

/**
 *
 * @param node
 * Added addNode to Graphs prototype
 */
Graph.prototype.addNode = function(node){
  this[node] = [];
};

/**
 *
 * @param node
 * @returns {boolean}
 * Added contains to Graphs prototype
 */
Graph.prototype.contains = function(node){
  return this[node] !== undefined;
};

/**
 *
 * @param node
 * Added removeNode to Graphs prototype
 */
Graph.prototype.removeNode = function(node){
  delete this[node];
};

/**
 *
 * @param fromNode
 * @param toNode
 * @returns {boolean}
 * Added hasEdge to Graphs prototype
 */
Graph.prototype.hasEdge = function(fromNode, toNode){
  return this[fromNode].indexOf(toNode) !== -1;
};

/**
 *
 * @param fromNode
 * @param toNode
 * Added addEdge to Graphs prototype
 */
Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

/**
 *
 * @param fromNode
 * @param toNode
 * Added removeEdge to Graphs prototype
 */
Graph.prototype.removeEdge = function(fromNode, toNode){
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  this[toNode].splice(this[fromNode].indexOf(fromNode), 1);
};

/**
 *
 * @param cb
 * Added forEachNode to Graphs prototype
 */
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



