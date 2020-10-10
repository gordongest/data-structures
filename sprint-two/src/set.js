var Set = function() {
  var set = Object.create(setPrototype);
  set._storage;
  set.temp = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (!_.contains(this._storage, item)) {
  //   this._storage.push(item);
  // }

  this.temp.push(item);

  this._storage = _.uniq(this.temp);
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
 add: O(n);
 contains: O(n);
 remove: O(n);
 */
