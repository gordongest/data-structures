var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};

  newStack.keyVal = 0;
  newStack.stackSize = 0;

  extend(newStack, stackMethods);

  console.log(newStack);
  console.log(newStack.push);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = (val) => {
  // console.log(this);
  this[this.keyVal] = val;
  this.keyVal++;
  this.size++;
};

stackMethods.pop = () => {
  delete this[this.keyVal];
  this.keyVal--;
  this.size--;
};

stackMethods.size = () => {
  return Math.max(this.stackSize, 0);
};