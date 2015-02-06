var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

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

  list.removeHead = function(){
    var returnValue = list.head.value;
    list.head = list.head.next;
    return returnValue;
  };

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