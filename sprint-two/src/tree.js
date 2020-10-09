var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};


/*
 * Complexity: What is the time complexity of the above functions?

 contains: O(log n)
*/

/*

start with a node
  second node goes immediately below first node
  when adding a node, we evaluate the new node in comparison to the previous
  recursively evaluate new node against current nodes and branches
    if middle value of ends, make the new parent node
    if greater, new node goes to the right
    if lesser, new node goes to the left