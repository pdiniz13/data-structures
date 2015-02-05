var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    start: 0,
    end: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value){
    var key = storage.end;
    storage[key] = value;
    storage.end += 1;
  };

  someInstance.dequeue = function(){
    var key = storage.start;
    storage.start += 1;
    return storage[key];
  };

  someInstance.size = function(){
    return Math.max(storage.end - storage.start, 0);
  };

  return someInstance;
};
