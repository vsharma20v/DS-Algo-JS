// LRU Cache Class - Using Ordered Map
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  // O(1)
  get(key) {
    const item = this.cache.get(key);
    if (!item) return -1;
    this.cache.delete(key);
    this.cache.set(key, item);
    return item;
  }

  // O(n)
  LRUItemKey() {
    return this.cache.keys().next().value;
  }

  // O(n) because of LRUItemKey() method
  put(key, value) {
    if (this.get(key) === -1 && this.capacity === this.cache.size)
      this.cache.delete(this.LRUItemKey());
    this.cache.set(key, value);
  }

  // O(n)
  print() {
    console.log(this.cache);
  }

  // O(1)
  clear() {
    this.cache = new Map();
  }
}

const lru = new LRUCache(3);
lru.put(1, "one");
lru.put(2, "two");
lru.put(3, "three");
lru.print();
console.log(lru.get(1));
lru.print();
lru.put(4, "four");
lru.print();
