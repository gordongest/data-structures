var Queue = function() {

  this.storage = {};
  this.keyVal = 0;
  this.queueSize = 0;
  this.oldestKey = -1;

};

Queue.prototype.enqueue = function(val) {
  this.storage[this.keyVal] = val;
  this.keyVal++;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  delete this.storage[this.oldestKey];
  this.oldestKey++;
  this.queueSize--;
  return this.storage[this.oldestKey];
};

Queue.prototype.size = function() {
  return Math.max(this.queueSize, 0);
};

var testQueue = new Queue();