var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let keyVal = 0;

  let runCounter = -1;

  var keyIncrementor = () => { keyVal++; };

  var keyDecrementor = () => { keyVal--; };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keyVal] = value;
    keyIncrementor();
    // console.log(storage);
  };

  someInstance.dequeue = function() {
    delete storage[keyVal];
    keyDecrementor();
    console.log(storage);
    return storage[keyVal];
    // why is the above working? concrunCounteeptually it should be removing the last property, not the first property
  };

  someInstance.size = function() {
    return Math.max(keyVal, 0);
  };

  return someInstance;
};
