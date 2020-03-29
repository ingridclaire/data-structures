var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstMethods = {
  insert: function(x) {
    if (x > this.value) {
      if (!this.right) {
        this.right = BinarySearchTree(x);
      } else {
        this.right.insert(x);
      }
    } else {
      if (!this.left){
        this.left = BinarySearchTree(x);
      } else {
        this.left.insert(x);
      }
    }
  },

  contains: function(x) {
    if (this.value === x) {
      return true;
    }
    if (!this.left && !this.right) {
      return false;
    }
    if (x > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(x);
      }
    } else {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(x);
      }

    }
  },

  depthFirstLog: function(func) {
    func(this.value);

    if (this.left) {
      this.left.depthFirstLog(func);
    }

    if(this.right) {
      this.right.depthFirstLog(func);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
