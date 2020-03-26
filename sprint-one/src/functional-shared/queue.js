// var queue;
// var instantiator = Queue;
// queue.enqueue('a'); -> return 1
// queue.dequeue(); -> return 'a'
// queue.size(); -> return 0
// queue2.enqueue('a');


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  // var storage = {};

  // var start = 0;
  // var end = 0;

  addMethods(someInstance, queueMethods);

  return someInstance;
};

var addMethods = function(obj, objMethods) {
  for (var method in objMethods) {
    obj[method] = objMethods[method];
  }
};

var queueMethods = {
  storage : {},
  start : 0,
  end : 0,
  enqueue : function(value) {
    this.storage[this.end] = value;
    this.end++;
    return this.end - this.start;
  },

  dequeue : function() {
    var currentVal = this.storage[this.start];
    this.start++;
    return currentVal;
  },

  size : function() {
    if ((this.end - this.start) <= 0) {
      return 0;
    } else {
      return this.end - this.start;
    }
  }
};


// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {};
//   // var storage = {};

//   // var start = 0;
//   // var end = 0;

//   addMethods(someInstance, queueMethods);

//   return someInstance;
// };

// var addMethods = function(obj, objMethods) {
//   for (var method in objMethods) {
//     obj[method] = objMethods[method];
//   }
// }

// var queueMethods = {
//   storage : {},
//   start : 0,
//   end : 0,
//   enqueue : function(value) {
//     this.storage[this.end] = value;
//     this.end++;
//     return this.end - this.start;
//   },

//   dequeue : function() {
//     var currentVal = this.storage[this.start];
//     this.start++;
//     return currentVal;
//   },

//   size : function() {
//     if ((this.end - this.start) <= 0) {
//       return 0;
//     } else {
//       return this.end - this.start;
//     }
//   }
// };


