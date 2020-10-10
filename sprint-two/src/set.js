var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    let currentItem = this._storage[i];
    if (currentItem === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
