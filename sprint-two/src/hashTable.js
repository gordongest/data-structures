var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let result;

  if (this._storage[index]) {
    _.each(this._storage[index], function(innerArray) {
      if (innerArray[0] === k) {
        result = innerArray[1];
      }
    });
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index]) {
    _.each(this._storage[index], function(innerArray) {
      if (innerArray[0] === k) {
        innerArray[0] = undefined;
      }
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: best Case = O(1) worst Case = O(n)
 remove: best Case = O(1) worst Case = O(n)
 */


