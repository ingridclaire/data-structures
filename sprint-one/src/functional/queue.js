var Queue = function () {
  var someInstance = {};
  var start = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[end] = value;
    end++;
    return end - start;
  };

  someInstance.dequeue = function () {
    var currentVal = storage[start];
    delete storage[start];
    start++;
    return currentVal;
  };

  someInstance.size = function () {
    if ((end - start) <= 0) {
      return 0;
    } else {
      return end - start;
    }
  };

  return someInstance;
};