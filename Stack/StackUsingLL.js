// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// Stack Class
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    const removedNode = this.top;
    if (this.size === 1) {
      this.top = null;
    } else {
      this.top = this.top.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    return this.top.data;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let stackValues = "";
    let current = this.top;
    while (current) {
      stackValues += current.data + " ";
      current = current.next;
    }
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
console.log(stack.top);
stack.print();
console.log(stack.pop());
stack.print();
