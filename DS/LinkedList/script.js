// Creating this :-)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   inserting element first in the list
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // inserting element last in the list
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty make it the head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //   Insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If index is zero
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // node before the index we want to insert
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  //   print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.clearList();

ll.printListData();

const names = new LinkedList();
names.insertFirst('Bhavneet');
names.insertFirst('Bobby');
names.insertFirst('Davinder');
names.insertFirst('Kiran');
names.insertFirst('Bindi');

names.printListData();
