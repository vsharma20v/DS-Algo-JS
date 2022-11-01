// Queue Class
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.size--;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let queueValues = "";
    Object.values(this.items).forEach((item) => {
      queueValues += item + " ";
    });
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
console.log(queue.items);
