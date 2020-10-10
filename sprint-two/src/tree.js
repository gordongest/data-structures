var Tree = function(value) {

  var newTree = {};

  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  /*
  i: value
  o: new cobject
  c: only add child to parent node with more than one child
  e:

  hl: adds child to existing tree
  */

  let newNode = Tree(value);
  this.children.push(newNode);

};

treeMethods.contains = function(target) {

  /*
  i: target (number) to find in tree
  o: boolean
  c: must return SOMETHING
  e: target is null, target is string

  hl: recursively searches tree for target
  */

  // iterate through the .children array
  // check if property 'value' at current element is equal to target
  // if so, return true
  // if not, recursively search the elements in element.children

  let result = false;

  let recursiveSearch = function(collection, iterator) {
    for (let element of collection) {
      iterator(element, target);
      if (element.children.length) {
        recursiveSearch(element.children, iterator);
      }
    }
  };

  let test = function(item, query) {
    if (item.value === query) {
      result = true;
    }
  };

  if (this.children.length) {
    recursiveSearch(this.children, test);
  }

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addChild: O(n)
 contains: O(log n)
*/