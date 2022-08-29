class LinkedList {
  constructor(head, next) {
    this.head = this.tail = null;
  }

  append(value) {
    if (!this.tail) {
      // if it does not exist - create a new value
      this.head = this.tail = new Node(value);
    } else {
      // set the old tail var to current tail
      let oldTail = this.tail;
      //   set the current tail to the new node value
      this.tail = new Node(value);
      //   the oldtail.next = current tail
      oldTail.next = this.tail;
      //   the current tails previous = old tail
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    } else {
      let removeHead = this.head;

      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return removeHead.value;
    }
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    } else {
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list);

list.prepend(-2);
list.prepend(-1);
list.prepend(0);

list.print();
