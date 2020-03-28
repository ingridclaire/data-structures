var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  addMethods(newTree, treeMethods);
  return newTree;
};

var addMethods = function (obj, methods) {
  for (var method in methods) {
    obj[method] = methods[method];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};