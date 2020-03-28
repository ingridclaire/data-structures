var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};


Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node) {

  var edges = this.nodes[node];
  for (var i = 0; i < edges.length; i++) {
    var connectedNode = [edges[i]];
    var edgesOfConnected = this.nodes[connectedNode];
    var index = edgesOfConnected.indexOf(node);
    edgesOfConnected.splice(index, 1);
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].indexOf(toNode) >= 0;

};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

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

Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.nodes).forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


