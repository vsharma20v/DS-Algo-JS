// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// Queue Class
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    const removedNode = this.front;
    if (this.size === 1) {
      this.front = this.rear = null;
    } else {
      this.front = this.front.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.data;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.front.data;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let queueValues = "";
    let current = this.front;
    while (current) {
      queueValues += current.data + " ";
      current = current.next;
    }
    console.log(queueValues);
  }
}

const queue = new Queue();
console.log(queue.isEmpty(), queue.size);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.isEmpty(), queue.size);
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.isEmpty(), queue.size);
console.log(queue.front);
console.log(queue.rear);
