/**
 *
 * @returns {{}}
 * @constructor
 */
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  /**
   *
   * @param value
   * Added addToTail to LinkedList
   */
  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  /**
   *
   * @returns {*}
   * Added removeHead to LinkedList
   */
  list.removeHead = function(){
    var returnValue = list.head.value;
    list.head = list.head.next;
    return returnValue;
  };

  /**
   *
   * @param target
   * @returns {boolean}
   * Added contains to LinkedList
   */
  list.contains = function(target){
    var current = list.head;
    var bool = false;
    while(current !== null){
      if(current.value === target){
        bool = true;
      }
      current = current.next;
    }
    return bool;
  };

  return list;
};

/**
 *
 * @param value
 * @returns {{}}
 * @constructor
 */
var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear for contains, constant for the rest.
 */
//