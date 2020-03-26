var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.end] = value;
    this.end++;
    return this.end - this.start;
  },

  dequeue: function () {
    var currentVal = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return currentVal;
  },

  size: function () {
    if ((this.end - this.start) <= 0) {
      return 0;
    } else {
      return this.end - this.start;
    }
  }
};