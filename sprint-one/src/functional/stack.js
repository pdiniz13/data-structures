var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    end: 0
  };

  // Implement the methods below
  someInstance.push = function(value){
      var key = storage.end;
    storage[key] = value;
    storage.end += 1;
  };

  someInstance.pop = function(){
    if(storage.end > 0){
      storage.end -= 1;
      var value = storage[storage.end];
      delete storage[storage.end];
      return value;
    }
  };

  someInstance.size = function(){
    return storage.end;
  };

  return someInstance;
};
