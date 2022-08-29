class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop(element) {
    let removedItem = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removedItem;
  }

  peek() {
    return console.log(this.storage[this.size]);
  }
}

const stack = new Stack();

stack.push('Cat');
stack.push('Rhino');
stack.push('Dog');
stack.push('Giraffe');
stack.push('Elephant');

console.log(stack);

stack.pop();

console.log(stack);

stack.peek();

Implementing the Stack Method
