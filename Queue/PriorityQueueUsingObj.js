// Element Class
class Element {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// Priority Queue Class
class PriorityQueue {
  constructor() {
    this.items = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value, priority) {
    //  Assumptions = Priority 1 (Urgent), Priority 2 (High), Priority 3 (Medium), Priority 4 (Low), ...
    const element = new Element(value, priority);
    const helperArray = Object.values(this.items);
    helperArray.push(element);
    helperArray.sort((a, b) => a.priority - b.priority);
    this.items = { ...helperArray };
    this.size++;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
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
      console.log("Priority Queue is empty");
      return;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return;
    }
    let queueValues = "";
    Object.values(this.items).forEach((item) => {
      queueValues += `{value:${item.value}, priority:${item.priority}} `;
    });
    console.log(queueValues);
  }
}

const queue = new PriorityQueue();
console.log(queue.isEmpty(), queue.size);
queue.enqueue(5, 2);
queue.enqueue(6, 1);
queue.enqueue(10, 4);
queue.enqueue(8, 3);
queue.enqueue(4, 1);
queue.enqueue(14, 2);
queue.enqueue(7, 3);
console.log(queue.isEmpty(), queue.size);
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();
console.log(queue.isEmpty(), queue.size);
