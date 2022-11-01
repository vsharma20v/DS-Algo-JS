// Node Class
class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

// Trie Class
class Trie {
  constructor() {
    this.root = new Node();
  }

  // O(w) where w = length of word
  insert(word) {
    if (!word) return;
    let current = this.root;
    for (let i = 0; i < word.length; ++i) {
      const letter = word[i];
      if (!current.children[letter]) {
        current.children[letter] = new Node();
      }
      current = current.children[letter];
      if (i === word.length - 1) current.isWord = true;
    }
  }

  // O(w) where w = length of word
  contains(word) {
    if (!word) return false;
    let current = this.root;
    for (let i = 0; i < word.length; ++i) {
      const letter = word[i];
      if (!current.children[letter]) return false;
      current = current.children[letter];
    }
    return current.isWord;
  }

  // O(p) where p = length of prefix
  startsWithPrefix(prefix) {
    if (!prefix) return false;
    let current = this.root;
    for (let i = 0; i < prefix.length; ++i) {
      const letter = prefix[i];
      if (!current.children[letter]) return false;
      current = current.children[letter];
    }
    return true;
  }

  // O(n) where n = no of nodes in trie
  print() {
    const words = [];

    const printRecursive = (node, string) => {
      if (Object.keys(node.children).length > 0) {
        for (const letter in node.children) {
          printRecursive(node.children[letter], string.concat(letter));
        }
        if (node.isWord) words.push(string);
      } else {
        if (string.length > 0) words.push(string);
        return;
      }
    };

    printRecursive(this.root, "");
    console.log(words);
  }

  // O(n) where n = no of nodes in trie
  printIterative() {
    const words = [];
    let current = this.root;
    const queue = [[current, ""]];
    while (queue.length) {
      const element = queue.shift();
      const node = element[0];
      const word = element[1];
      if (node.isWord) words.push(word);
      for (let child in node.children) {
        const childNode = node.children[child];
        queue.push([childNode, word + child]);
      }
    }
    console.log(words);
  }

  // O(f+m) where f = length of fragment & m = no of words in trie
  autocomplete(fragment) {
    if (!fragment) return;
    const words = [];
    let current = this.root;
    for (let i = 0; i < fragment.length; ++i) {
      const letter = fragment[i];
      if (!current.children[letter]) break;
      current = current.children[letter];
      if (i === fragment.length - 1) {
        const queue = [];
        queue.push([current, fragment]);
        while (queue.length) {
          const element = queue.shift();
          const node = element[0];
          const word = element[1];
          if (node.isWord) words.push(word);
          for (const child in node.children) {
            const childNode = node.children[child];
            queue.push([childNode, word + child]);
          }
        }
      }
    }
    return words;
  }
}

const t = new Trie();
t.insert("ball");
t.insert("bat");
t.insert("doll");
t.insert("dork");
t.insert("do");
t.insert("dorm");
t.insert("send");
t.insert("sense");
t.print();
t.printIterative();
console.log(t.autocomplete("ba"));
console.log(t.contains("doll"));
console.log(t.contains("dor"));
console.log(t.contains("dorf"));
console.log(t.startsWithPrefix("dor"));
console.log(t.startsWithPrefix("dorf"));
