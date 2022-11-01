// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// Singly LL Class
class SinglyLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // checks if LL is empty => O(1)
  isEmpty() {
    return this.size === 0;
  }

  // insert value at beginning => prepend => O(1)
  unshift(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // insert value at end => append => O(1)
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
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
      prev.next = node;
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
      this.tail = this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return removedNode.data;
  }

  // remove the value from end => O(n)
  pop() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    const removedNode = this.tail;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
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
      const prev = this.get(index - 1);
      const removedNode = prev.next;
      prev.next = removedNode.next;
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

  // set or udpdate value of specified index => O(n)
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

  // reverse LL by shifting node without any auxiliary data structure => O(n)
  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  // print the values => O(n)
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += current.data;
      if (current.next !== null) listValues += " -> ";
      current = current.next;
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

const list = new SinglyLinkedList();
list.push(3);
list.unshift(8);
list.push(4);
list.insert(10, 2);
list.insert(100, 0);
list.print();
console.log(list.size);
console.log(list.toArray());
console.log(list.isEmpty());
console.log(list.get(0));
console.log(list.get(3));
list.print();
console.log(list.set(5, 3));
console.log(list.set(5, 13));
list.print();
console.log(list.search(3));
console.log(list.search(13));
list.reverse();
list.print();
console.log(list.pop());
list.print();
console.log(list.shift());
list.print();
console.log(list.remove(1));
list.print();
