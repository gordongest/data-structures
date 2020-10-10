var BinarySearchTree = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(value) {

  var recursiveBrancher = function(currentNode, newNode) {
    if (newNode > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = new BinarySearchTree(newNode);
      } else {
        recursiveBrancher(currentNode.right, newNode);
      }
    } else if (newNode < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = new BinarySearchTree(newNode);
      } else {
        recursiveBrancher(currentNode.left, newNode);
      }
    }
  };

  recursiveBrancher(this, value);
};

BinarySearchTree.prototype.contains = function(value) {

  let result = false;

  var recursiveFinder = function(currentNode, query) {
    if (query === currentNode.value) {
      result = true;
    } else if (query > currentNode.value) {
      if (currentNode.right !== null) {
        recursiveFinder(currentNode.right, query);
      }
    } else if (query < currentNode.value) {
      if (currentNode.left !== null) {
        recursiveFinder(currentNode.left, query);
      }
    }
  };

  recursiveFinder(this, value);

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  var recursiveIterator = function(location, func) {
    func(location.value);
    if (location.left !== null) {
      recursiveIterator(location.left, func);
    }
    if (location.right !== null) {
      recursiveIterator(location.right, func);
    }
  };

  recursiveIterator(this, cb);
};

/*
 What is the time complexity of the above functions?
Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.
*/

/*
 * Complexity: What is the time complexity of the above functions?
 all should be O(log n)
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