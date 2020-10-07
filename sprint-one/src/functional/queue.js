var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let keyVal = 0;

  let size = 0;

  let oldestKey = -1;

  var keyIncrementor = () => { keyVal++; };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keyVal] = value;
    keyIncrementor();
    size++;
  };

  someInstance.dequeue = function() {
    delete storage[oldestKey];
    oldestKey++;
    size--;
    console.log('key:', oldestKey, ', value:', storage[oldestKey]);
    console.log(storage);
    return storage[oldestKey];
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};
