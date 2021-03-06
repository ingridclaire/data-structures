var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function () {
  var currentVal = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return currentVal;
};

Stack.prototype.size = function () {
  if (this.length <= 0) {
    return 0;
  } else {
    return this.length;
  }
};