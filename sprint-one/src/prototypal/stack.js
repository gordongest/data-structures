var Stack = function() {

  var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.keyVal = 0;
  newStack.stackSize = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.keyVal] = val;
  this.keyVal++;
  this.stackSize++;
};

stackMethods.pop = function() {
  delete this.storage[this.keyVal];
  this.keyVal--;
  this.stackSize--;
  return this.storage[this.keyVal];
};

stackMethods.size = function() {
  return Math.max(this.stackSize, 0);
};

