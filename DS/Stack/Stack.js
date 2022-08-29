// class Stack {
//   constructor() {
//     this.storage = {};
//     this.size = 0;
//   }

//   push(element) {
//     this.size++;
//     this.storage[this.size] = element;
//   }

//   pop(element) {
//     let removedItem = this.storage[this.size];
//     delete this.storage[this.size];
//     this.size--;
//     return removedItem;
//   }

//   peek() {
//     return console.log(this.storage[this.size]);
//   }
// }

// const stack = new Stack();

// stack.push('Cat');
// stack.push('Rhino');
// stack.push('Dog');
// stack.push('Giraffe');
// stack.push('Elephant');

// console.log(stack);

// stack.pop();

// console.log(stack);

// stack.peek();

// Implementing the Stack Method

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  //   push
  push(element) {
    this.items[this.size] = element;
    console.log(`${element} added at index ${this.size}`);
    this.size++;
    return this.size - 1;
  }

  //   pop
  pop() {
    // remove the last item in the object
    if (this.size == 0) {
      return undefined;
    }
    let lastItem = this.items[this.size - 1];
    delete this.items[this.size - 1];
    this.size--;
    console.log(`${lastItem} removed from the array`);
    return lastItem;
  }

  peek() {
    //
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();

stack.pop();

stack.push(500);

stack.push(600);
stack.push(700);
stack.push(800);

console.log(stack);

stack.pop();

console.log(stack);
