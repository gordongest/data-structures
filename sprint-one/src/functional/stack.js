var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let keyVal = 0;

  var keyIncrementor = () => { keyVal++; };

  var keyDecrementor = () => { keyVal--; };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[keyVal] = value;
    keyIncrementor(keyVal);
    // console.log(storage);
  };

  someInstance.pop = function() {
    delete storage[keyVal];
    keyDecrementor(keyVal);
    // console.log(storage);
    return storage[keyVal];
  };

  someInstance.size = function() {
    return Math.max(keyVal, 0);
  };

  return someInstance;
};