var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
    return this.length;
  },

  pop: function () {
    var currentVal = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return currentVal;
  },

  size: function () {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.length;
    }
  }
};