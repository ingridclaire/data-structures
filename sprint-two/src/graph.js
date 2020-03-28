// graph1 =>

// Instantiate a new graph
var Graph = function() {
  this.nodes = {}; //maybe an array type instead?
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // graph1.addNode(3)  {3: []}
  this.nodes[node] = [];

  // {node: 3, edge: []}, {node: 4, edge: []}...
  // {3: []}, {4: []}, {}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // graph1.contains(3)
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //0
  //loop through the edges array of the node that is about to removed
  var edges = this.nodes[node]; // [1,2,3]
  for (var i = 0; i < edges.length; i++) {
    var connectedNode = [edges[i]];
    var edgesOfConnected = this.nodes[connectedNode];
    var index = edgesOfConnected.indexOf(node);
    edgesOfConnected.splice(index, 1);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].indexOf(toNode) >= 0;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgesFrom = this.nodes[fromNode];
  var edgesTo = this.nodes[toNode];

  for (var i = 0; i < edgesFrom.length; i++) {
    if (edgesFrom[i] === toNode) {
      edgesFrom.splice(i, 1);
    }
  }

  for (var i = 0; i < edgesTo.length; i++) {
    if (edgesTo[i] === fromNode) {
      edgesTo.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.nodes).forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


