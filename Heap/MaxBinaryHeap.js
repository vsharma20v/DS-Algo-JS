// Maximum Binary Heap Class
class MaxBinaryHeap {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // checks if Heap is empty => O(1)
  isEmpty() {
    return this.size === 0;
  }

  // bubble up the inserted element to its appropriate position => O(log n)
  bubbleUp() {
    let index = this.size - 1; // inserted element index
    const element = this.items[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.items[parentIndex];
      if (element <= parent) break;
      // element > parent so swap element & parent values
      this.items[parentIndex] = element;
      this.items[index] = parent;
      index = parentIndex; // now index become parentIndex
    }
  }

  // sink down the last element to its appropriate position => O(log n)
  sinkDown() {
    let index = 0;
    const element = this.items[index];
    while (index !== null) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let swapIndex = null;
      if (leftIndex < this.size && element < this.items[leftIndex])
        swapIndex = leftIndex;
      // Binary heap is complete binary tree so right child may or may not exists
      if (rightIndex < this.size && element < this.items[rightIndex]) {
        swapIndex =
          this.items[rightIndex] > this.items[leftIndex]
            ? rightIndex
            : leftIndex;
      }
      if (swapIndex === null) break;
      this.items[index] = this.items[swapIndex];
      this.items[swapIndex] = element;
      index = swapIndex;
    }
  }

  // insert value in Heap => O(log n)
  insert(value) {
    this.items.push(value);
    this.size++;
    this.bubbleUp();
  }

  // delete & return the maximum value(root node) of Heap => O(log n)
  extractMax() {
    if (this.isEmpty()) {
      console.log("Heap is empty");
      return;
    }
    const maximumElement = this.items[0];
    const lastElement = this.items.pop();
    this.size--;
    if (this.size > 0) {
      this.items[0] = lastElement;
      this.sinkDown();
    }

    return maximumElement;
  }

  // return the maximum value(root node) of Heap => O(1)
  peek() {
    if (this.isEmpty()) {
      console.log("Heap is empty");
      return;
    }
    return this.items[0];
  }

  // print Heap in level order => O(n)
  print() {
    if (this.isEmpty()) {
      console.log("Heap is empty");
      return;
    }
    let heapValues = "";
    this.items.forEach((item) => {
      heapValues += item + " ";
    });
    console.log(heapValues);
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.isEmpty(), heap.size);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.isEmpty(), heap.size);
heap.print();
console.log(heap.peek());
console.log(heap.extractMax());
heap.print();
console.log(heap.peek());
console.log(heap.extractMax());
heap.print();
console.log(heap.peek());
