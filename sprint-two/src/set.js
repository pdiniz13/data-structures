/**
 *
 * @returns {setPrototype}
 * @constructor
 */
var Set = function(){
  var set = Object.create(setPrototype);
  //set._storage = undefined;
  return set;
};

/**
 *
 * @type {{}}
 */

var setPrototype = {};

/**
 *
 * @param item
 * Added add to Set
 */
setPrototype.add = function(item){
  this[item] = true;
};

/**
 *
 * @param item
 * @returns {boolean}
 * Added contains to Set
 */
setPrototype.contains = function(item){
  return this[item] !== undefined;
};

/**
 *
 * @param item
 * Added remove to Set
 */
setPrototype.remove = function(item){
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * all constant!
 */
