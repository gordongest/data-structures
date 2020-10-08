var Queue = function() {

  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.keyVal = 0;
  newQueue.queueSize = 0;
  newQueue.oldestKey = -1;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.keyVal] = val;
  this.keyVal++;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  delete this.storage[this.oldestKey];
  this.oldestKey++;
  this.queueSize--;
  return this.storage[this.oldestKey];
};

queueMethods.size = function() {
  return Math.max(this.queueSize, 0);
};