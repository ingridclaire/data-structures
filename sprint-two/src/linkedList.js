// LinkedList {head: Node {value: 200, next: Node {value: 100, next: Node {value: 500, next: null}}}, tail: {value: 500, next: null}}
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      var current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    if (list.head.next === null) {
      return list.head.value;
    }
    // step one: create a reference to the current head
    var oldHead = list.head;
    // step two: point the list.head to the next node
    list.head = oldHead.next;
    // step three: return old head's value
    return oldHead.value;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed-in value is in the linked list
    var currentnode = list.head;
    while (currentnode.next) {
      if(target === currentnode.value) {
        return true;
      }
      currentnode = currentnode.next;
    }
    if (currentnode.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// list = {
//   head: {
//     value: 4,
//     next: {
//         value: 5,
//         next: null
//     }
//   },
//   tail: {
//     value: 5,
//     next: null
//   }
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */
