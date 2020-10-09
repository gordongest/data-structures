var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail = Node(value);
    }

  };

  list.removeHead = function() {
    let removed = list.head.value;
    list.head = list.tail;
    return removed;
  };

  list.contains = function(target) {
    for (let node in list) {
      if (list[node].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addToTail: O(1);
  removeHead: O(1);
  contains: O(n);

 */