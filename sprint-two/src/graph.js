
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  /*
  i: number
  o: nothing
  c:
  e: node === undefined

  hl: pushes the input node to the array
  */

  let newNode = {
    val: node,
    edges: []
  };

  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  /*
  i: number
  o: boolean
  c:
  e: node === undefined

  hl: iterates through the array and checks to see if the query is present
  */

  let result = false;

  _.each(this.nodes, function(currentNode) {
    if (currentNode.val === node) {
      result = true;
    }
  });

  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  /*
  i: number
  o: nothing
  c:
  e:

  hl: checks if the passed in number (node) is in the array, and deletes it if so
  */

  for (let i = 0; i < this.nodes.length; i++) {
    let currentNode = this.nodes[i];
    if (currentNode.val === node) {
      let targetNodeValue = currentNode.edges[0];
      _.each(this.nodes, function(connectedNode) {
        if (connectedNode.val === targetNodeValue) {
          connectedNode.edges[0] = undefined;
        }
      });
      delete this.nodes[i];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  /*
  i: number, number
  o: boolean
  c:
  e:

  hl: checks the array at key 'edge' for value
  */

  result = false;

  _.each(this.nodes, function(currentNode) {
    if (currentNode.val === fromNode) {
      _.each(currentNode.edges, function(edge) {
        if (edge === toNode) {
          result = true;
        }
      });
    }
  });

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

  _.each(this.nodes, function(node) {
    if (node.val === fromNode) {
      node.edges.push(toNode);
    }
    if (node.val === toNode) {
      node.edges.push(fromNode);
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  _.each(this.nodes, function(currentNode) {
    if (currentNode.val === fromNode) {
      if (currentNode.edges.length) {
        for (let j = 0; j < currentNode.edges.length; j++) {
          if (currentNode.edges[j] === toNode) {
            delete currentNode.edges[j];
          }
        }
      }
    }
    if (currentNode.val === toNode) {
      if (currentNode.edges.length) {
        for (let j = 0; j < currentNode.edges.length; j++) {
          if (currentNode.edges[j] === fromNode) {
            delete currentNode.edges[j];
          }
        }
      }
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node.val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode:O(1)
removeNode:O(n)
contains: O(n)
hasEdge: O(n)
addEdge: O(n)
removeEdge: O(n)
forEachNode: O(n)
 */


