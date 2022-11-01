// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.previous = null;
  }
}

// Doubly LL Class
class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // check if LL is empty => O(1)
  isEmpty() {
    return this.size === 0;
  }

  // insert value at beginning => prepend => O(1)
  unshift(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.size++;
  }

  // insert value at end => append => O(1)
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // insert at any index => O(n)
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) this.unshift(value);
    else {
      const node = new Node(value);
      const prev = this.get(index - 1);
      node.next = prev.next;
      prev.next.previous = node;
      prev.next = node;
      node.previous = prev;
      this.size++;
    }
  }

  // remove value from beginning => O(1)
  shift() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    const removedNode = this.head;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      removedNode.next = null;
      this.head.previous = null;
    }
    this.size--;
    return removedNode.data;
  }

  // remove the value from end => O(1)
  pop() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    const removedNode = this.tail;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      removedNode.previous = null;
    }
    this.size--;
    return removedNode.data;
  }

  // remove from specified index => O(n)
  remove(index) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) return this.shift();
    else {
      const removedNode = this.get(index);
      removedNode.previous.next = removedNode.next;
      removedNode.next.previous = removedNode.previous;
      removedNode.next = removedNode.previous = null;
      this.size--;
      return removedNode.data;
    }
  }

  // get the node of specified index => O(n)
  get(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // set or update value of specified index => O(n)
  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = value;
      return true;
    }
    return false;
  }

  // search or find value => O(n)
  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) return index;
      index++;
      current = current.next;
    }

    return -1;
  }

  // reverse LL => O(n)
  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let current = this.head;
    while (current) {
      current.previous = current.next;
      current.next = prev;
      prev = current;
      current = current.previous;
    }
    this.tail = this.head;
    this.head = prev;
  }

  // print the value => O(n)
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += current.data;
      if (current.next) listValues += " <=> ";
      current = current.next;
    }
    console.log(listValues);
  }

  // print the value in reverse => O(n)
  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.tail;
    let listValues = "";
    while (current) {
      listValues += current.data;
      if (current.previous) listValues += " <=> ";
      current = current.previous;
    }
    console.log(listValues);
  }

  // convert LL values to Array => O(n)
  toArray() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let array = [];
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }
}

const list = new DoublyLinkedList();
list.push(3);
list.unshift(8);
list.push(4);
list.insert(10, 2);
list.insert(100, 0);
list.print();
console.log(list.size);
console.log(list.isEmpty());
list.print();
list.printReverse();
console.log(list.toArray());
list.set(77, 1);
list.print();
console.log(list.get(2));
console.log(list.pop());
list.print();
console.log(list.shift());
list.print();
console.log(list.remove(1));
list.print();
console.log(list.remove(0));
list.print();
list.reverse();
list.print();
console.log(list.search(3));
console.log(list.search(13));
