/**
 *
 * @returns {{}}
 * @constructor
 */
var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    end: 0
  };

  // Implement the methods below
  /**
   *
   * @param value
   * Creates method push for the Stack function
   */
  someInstance.push = function(value){
      var key = storage.end;
    storage[key] = value;
    storage.end += 1;
  };

  /**
   *
   * @returns {*}
   * Creates method pop for the Stack function
   */
  someInstance.pop = function(){
    if(storage.end > 0){
      storage.end -= 1;
      var value = storage[storage.end];
      delete storage[storage.end];
      return value;
    }
  };

  /**
   *
   * @returns {number}
   * Creates method size for the Stack function
   */
  someInstance.size = function(){
    return storage.end;
  };

  return someInstance;
};
