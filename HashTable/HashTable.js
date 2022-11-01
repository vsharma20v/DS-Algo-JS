// Hash Table Class
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  // O(k) where k = length of key
  // Handling hash collision using separate chaining
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // O(n)
  set(key, value) {
    const index = this.hash(key);
    //   this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  // O(n)
  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
  }

  // O(n)
  delete(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) bucket.splice(bucket.indexOf(sameKeyItem), 1);
    }
  }

  // O(n)
  print() {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "vaibhav");
table.set("age", 26);
table.print();
console.log(table.get("name"));
// table.delete("name");
table.set("mane", "clark"); // hash collision i.e. hash("name") = hash("mane") = 17
table.print();
table.set("name", "vibhu");
table.print();
table.delete("name");
table.print();
