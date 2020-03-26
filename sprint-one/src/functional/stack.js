var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[size] = value;
    size++;
    return size;
  };

  someInstance.pop = function () {
    var currentVal = storage[size - 1];
    delete storage[size - 1];
    size--;
    return currentVal;
  };

  someInstance.size = function () {
    if (size <= 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};