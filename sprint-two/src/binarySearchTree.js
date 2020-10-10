var BinarySearchTree = function(value) {
};


/*
 * Complexity: What is the time complexity of the above functions?
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

/* Run through with example values
  let newTree = Tree(5) === invokes tree and starts with a     parent node with a value of 5

  newTree.addChild(4) === adds a new node to the tree with a value of 4 directly to the left of parent node

  newTree.contains(3) === recursively searches the tree for the value 3 at any node, traversing branches in binary fashion
*/