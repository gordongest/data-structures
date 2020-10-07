var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let keyVal = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[keyVal] = value;
    keyVal++;
  };

  someInstance.pop = function() {
    delete storage[keyVal];
    keyVal--;
    return storage[keyVal];
  };

  someInstance.size = function() {
    return Math.max(keyVal, 0);
  };

  return someInstance;
};