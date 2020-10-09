var Tree = function(value) {

  var newTree = {};

  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
// i: value
// o: new cobject
// c: only add child to parent node with more than one child
// e:
// hl: adds child to existing tree

  let newNode = Tree(value);
  this.children.push(newNode);

};

treeMethods.contains = function(target) {
  // i: target (number) to find in tree
  // o: boolean
  // c: must return SOMETHING
  // e: target is null, target is string

  // hl: recursively searches tree for target

  // iterate through the .children array
  // check if property 'value' at current element is equal to target
  //if so, return true
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

/* Run through with example values
  let newTree = Tree(5) === invokes tree and starts with a     parent node with a value of 5

  newTree.addChild(4) === adds a new node to the tree with a value of 4 directly to the left of parent node

  newTree.contains(3) === recursively searches the tree for the value 3 at any node, traversing branches in binary fashion
*/

/*
 * Complexity: What is the time complexity of the above functions?

 addChild: O(n)
 contains: O(log n)
*/

/*

start with a node
  second node goes immediately below first node
  when adding a node, we evaluate the new node in comparison to the previous
  recursively evaluate new node against current nodes and branches
    if value is already present in the Tree DO NOT add the node
    if middle value of ends, make the new parent node
    if greater, new node goes to the right
    if lesser, new node goes to the left

*/