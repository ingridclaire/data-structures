class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    var currentVal = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return currentVal;
  }

  size() {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.length;
    }
  }


}