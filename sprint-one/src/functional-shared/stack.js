var Stack = function() {

  var newStack = {};

  newStack.storage = {};
  newStack.keyVal = 0;
  newStack.stackSize = 0;

  _.extend(newStack, stackMethods);

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