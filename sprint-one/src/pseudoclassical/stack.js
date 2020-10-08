var Stack = function() {

  this.storage = {};
  this.keyVal = 0;
  this.stackSize = 0;

};

Stack.prototype.push = function(val) {
  this.storage[this.keyVal] = val;
  this.keyVal++;
  this.stackSize++;
};

Stack.prototype.pop = function() {
  delete this.storage[this.keyVal];
  this.keyVal--;
  this.stackSize--;
  return this.storage[this.keyVal];
};

Stack.prototype.size = function() {
  return Math.max(this.stackSize, 0);
};

var testStack = new Stack();