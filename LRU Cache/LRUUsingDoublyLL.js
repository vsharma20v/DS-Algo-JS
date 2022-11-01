// LRU Cache Class - Using Doubly Linked List & Map Object
// Head Pointer = Most Recently Used(MRU) Element & Tail Pointer = Least Recently Used(LRU) Element
// Node Class
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.cache = new Map();
  }

  // This operation will return the value of the key, if it exists, otherwise, it will return -1 => O(1)
  get(key) {
    const itemNode = this.cache.get(key);
    if (!itemNode) return -1;
    // Make the node as new Head of LinkedList if not already
    if (this.head !== itemNode) {
      // put() will automatically remove the node from it's position and make it a new head i.e most used
      this.put(key, itemNode.value);
    }
    return itemNode.value;
  }

  // This operation will update/write the key-value. If found, add the key and the value pair to the cache. If the number of keys has exceeded the initialized capacity of the cache, evict the least recently accessed item => O(1)
  put(key, value) {
    const itemNode = this.cache.get(key);
    if (itemNode) {
      this.detach(itemNode);
      this.size--;
    } else if (this.capacity === this.size) {
      // cache is full
      this.cache.delete(this.tail.key); // remove the LRU element from Map
      this.detach(this.tail); // remove the LRU element from Doubly LL
      this.size--;
    }

    // insert at head of doubly LL
    const newItemNode = new Node(key, value);
    if (!this.head) {
      this.head = this.tail = newItemNode;
    } else {
      this.head.previous = newItemNode;
      newItemNode.next = this.head;
      this.head = newItemNode;
    }

    // insert to Map
    this.cache.set(key, this.head);
    this.size++;
  }

  // remove the node from doubly LL => O(1)
  detach(node) {
    if (node.previous !== null) {
      node.previous.next = node.next;
    } else this.head = node.next;

    if (node.next !== null) {
      node.next.previous = node.previous;
    } else this.tail = node.previous;
  }

  // O(n)
  print() {
    for (const [key, node] of this.cache) {
      console.log(
        `${key} => { key: ${node.key}, value: ${node.value}, next: ${
          node.next ? node.next.key : node.next
        }, previous: ${node.previous ? node.previous.key : node.previous} }`
      );
    }
  }

  // O(1)
  clear() {
    this.size = 0;
    this.head = this.tail = null;
    this.cache = new Map();
  }
}

const lruCache = new LRUCache(3);
lruCache.put("a", 123);
lruCache.put("b", 456);
lruCache.put("c", 789);
lruCache.print(); // (MRU)c->b->a(LRU)
console.log(lruCache.get("a"));
lruCache.print(); //(MRU)a->c->b(LRU)
lruCache.put("d", 111);
lruCache.print(); //(MRU)d->a->c(LRU)
console.log(lruCache.size);
lruCache.clear();
console.log(lruCache.size);

/*
    Identifying LRU item from the cache:
    In a Doubly Linked list make head as most recently used and tail as least recently used.
    1. Do every insertion at the head.
    2. On every read or update operation detach the node from its position and attach at the head of the LinkedList. Remember, LRU is indicated in terms of both read and write operations to the cache.
    3. When cache limit exceeds remove a node from the tail
    4. Store key: Node relation in the cache map. So that retrieval is possible in O(1).

*/
