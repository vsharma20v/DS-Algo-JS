// Stack Class
class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    this.items.push(value);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    this.size--;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.items[this.items.length - 1];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let stackValues = "";
    this.items.forEach((item) => {
      stackValues += item + " ";
    });
    console.log(stackValues);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size);
console.log(stack.isEmpty());
console.log(stack.peek());
stack.print();
console.log(stack.pop());
stack.print();
