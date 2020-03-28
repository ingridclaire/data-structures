var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
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

//EXAMPLE
// var tree1 = Tree();
// tree1 => {value: 1, children: [{value: 2, children: [{value: 4, children: []}]}, {value: 3, children: []}]}
// tree1.children[0] : {value: 2, children: [{value: 4, children: []}]}
// tree1.children[1]: {value: 3, children: []}

/*
A tree class, in functional with shared methods style, with the following properties:
 .children property, an array containing a number of subtrees
 .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 What is the time complexity of the above functions?
 */


/*
 * Complexity: What is the time complexity of the above functions?
 */


// treeMethods.contains = function(target) {
//   var results = [];

// }


// treeMethods.contains = function(target) {
// //look at current tree's children array
//   if (this.children.length === 0 && this.value === target) {
//     return true;
//   } else if (this.children.length === 0 && this.value !== target) {
//     return false;
//   }
//   for (var i = 0; i < this.children.length; i++) {

//     } else {
//       for (var j = 0; j < this.children[i].children.length; j++) {
//         if(this.children[i].children[j].value === target) {
//           return true;
//         } else {}
//       }
//     }

//     return this.children[i].contains(target);
//   }
//   return false;
// };