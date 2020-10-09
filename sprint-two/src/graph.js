

// Instantiate a new graph
var Graph = function() {

  this.nodes = [];

};

/*
graph = {
  nodes: []
  edges: {}
};
*/

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // i: number
  // o: nothing
  // c:
  // e: node === undefined

  // hl: pushes the input node to the array

  let newNode = {
    val: node,
    edges: []
  };

  this.nodes.push(newNode);
  // console.log(this.nodes);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // i: number
  // o: boolean
  // c:
  // e: node === undefined

  // hl: iterates through the array and checks to see if the query is present

  for (let i = 0; i < this.nodes.length; i++) {
    let currentNode = this.nodes[i];
    // console.log(currentNode);
    if (currentNode === undefined) {
      return false;
    } else if (currentNode.val === node) {
      return true;
    }
    return false;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // i: number
  // o: nothing
  // c:
  // e:

  // hl: checks if the passed in number (node) is in the array, and deletes it if so

  for (let i = 0; i < this.nodes.length; i++) {
    let currentNode = this.nodes[i];
    if (currentNode.val === node) {
      // console.log(this.edges[node]);
      // this.edges[node].removeEdge();
      delete this.nodes[i];
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  /*
  i: number, number
  o: nothing
  c:
  e:

  hl: checks the array at key 'edge' for value
  */

  result = false;

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === fromNode) {

      if (this.nodes[i].edges.length) {
        for (let j = 0; j < this.nodes[i].edges.length; j++) {
          if (this.nodes[i].edges[j] === toNode) {
            result = true;
          }
        }
      }
    }
  }

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  /*
  i: number, number
  o: nothing
  c:
  e:

  hl: adds a number to the array at key 'edge' for both nodes
  */

  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].val === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
  }

  console.log(this.nodes);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // cb(this.nodes);
  // console.log(this.nodes);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


