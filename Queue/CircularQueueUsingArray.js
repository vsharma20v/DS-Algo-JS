// Circular Queue Class
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Circular Queue is full");
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    if (this.front === -1) {
      this.front = this.rear;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Circular Queue is empty");
      return;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    if (this.isEmpty()) {
      this.front = this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Circular Queue is empty");
      return;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Circular Queue is empty");
      return;
    }
    let queueValues = "";
    let i;
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      queueValues += this.items[i] + " ";
    }
    queueValues += this.items[i] + " ";
    console.log(queueValues);
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty(), queue.isFull(), queue.size, queue.capacity);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isEmpty(), queue.isFull(), queue.size, queue.capacity);
queue.enqueue(60);
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(60);
queue.print();
console.log(queue.items);
