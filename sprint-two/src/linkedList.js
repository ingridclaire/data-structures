// default state ->  list: {} / head: null / tail: null / next: null
// list.addToTail(4) -> list: {value: 4, next: null} / head: 4 / tail: 4 / next: null
// list.addToTail(3) -> list: {} / head: 4 / tail: 3 / next: null

/* listList1 = {
  head: 1,
  next: 2,
  next: 3
  tail: 4,
  next: null
}
*/

// LinkedList {head: Node {value: 200, next: Node {value: 100, next: null}}, size: 0}
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    } else {
      list.tail.next = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    // removes the first node from the list and returns its value
    /*
      list = {
        head: { (oldHead = list.head)
          value: 4,
          next: { (oldH)
              value: 5,
              next: null
          }
        }
    }
    */

    if (list.head === null) {
      return null;
    }
    if (list.head.next === null) {
      return list.head.value;
    }
    var oldHead = list.head;
    list.head = list.head.next;
    oldHead.next = null;
    // list.head.value = oldHead.next.value;
    return oldHead.value;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the passed-in value is in the linked list
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
