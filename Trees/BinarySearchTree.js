// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // checks if BST is empty => O(1)
  isEmpty() {
    return this.root === null;
  }

  // recursively insert a node either as left or right child => O(log n)
  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  // insert a value in BST => O(log n)
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  // recursively search a value in BST => O(log n)
  search(root, value) {
    if (root === null) return false;
    if (root.data === value) return true;
    else if (value < root.data) return this.search(root.left, value);
    else return this.search(root.right, value);
  }

  // search a value in BST (using loop) => O(log n)
  searchIterative(root, value) {
    if (root === null) return false;
    let current = this.root;
    while (current) {
      if (current.data === value) return true;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  // DFS - preorder traversal => O(n)
  preOrder() {
    const visitedNodes = [];
    function traverse(node) {
      if (node) {
        visitedNodes.push(node.data);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    console.log(visitedNodes);
  }

  // DFS - inorder traversal => O(n)
  inOrder() {
    const visitedNodes = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        visitedNodes.push(node.data);
        traverse(node.right);
      }
    }
    traverse(this.root);
    console.log(visitedNodes);
  }

  // DFS - postorder traversal => O(n)
  postOrder() {
    const visitedNodes = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        visitedNodes.push(node.data);
      }
    }
    traverse(this.root);
    console.log(visitedNodes);
  }

  // BFS - levelorder traversal => O(n)
  levelOrder() {
    // use the optimized queue implementation using object
    const queue = [];
    const visitedNodes = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      visitedNodes.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    console.log(visitedNodes);
  }

  // minimum value of the tree => O(log n)
  min(root) {
    if (root.left === null) return root.data;
    else return this.min(root.left);
  }

  // maximum value of the tree => O(log n)
  max(root) {
    if (root.right === null) return root.data;
    else return this.max(root.right);
  }

  // delete a value from BST => O(log n)
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  // search the value in BST & then delete it recursively using 3 scenarios => O(log n)
  deleteNode(root, value) {
    if (root === null) return root;
    if (value < root.data) root.left = this.deleteNode(root.left, value);
    else if (value > root.data) root.right = this.deleteNode(root.right, value);
    else {
      if (!root.left && !root.right) return null; // deleting node is leaf node
      if (!root.left) return root.right; // deleting node has only right child
      else if (!root.right) return root.left; // deleting node has only left child
      root.data = this.min(root.right); // deleting node has two children so finding min node from right subtree & assigning it to root node
      root.right = this.deleteNode(root.right, root.data); // deleting the duplicate node in right subtree
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(4);
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(0);
bst.insert(6);
console.log(bst.search(bst.root, 2));
console.log(bst.search(bst.root, 0));
console.log(bst.search(bst.root, 6));
console.log(bst.search(bst.root, 16));
console.log(bst.searchIterative(bst.root, 2));
console.log(bst.searchIterative(bst.root, 0));
console.log(bst.searchIterative(bst.root, 6));
console.log(bst.searchIterative(bst.root, 16));
bst.preOrder();
bst.inOrder();
bst.postOrder();
bst.levelOrder();
bst.delete(4);
bst.levelOrder();
console.log(bst.min(bst.root), bst.max(bst.root));

/* Inserting a node in BST
    1. if root === null then root = newNode
    2. else if the value is less than the root and left node is empty then add it to the left else recursively call the same function to descend one level and check again and add it and so on.
    3. else if the value is greater than the root and the right node is empty then add it else descend one level recursively and check again and keep doing till the element is added at the right spot.
*/

/* Searching a node in BST
    1. if root === null then return false
    2. if the value is below the root, we can say for sure that the value is not in the right subtree; we need to only search in the left subtree and if the value is above the root, we can say for sure that the value is not in the left subtree; we need to only search in the right subtree.
    3. if the value is found, we return the value so that it gets propagated in each recursion step.
    4. if the value is not found, we eventually reach the left or right child of a leaf node which is NULL and it gets propagated and returned.
*/

/*  Deleting a node in BST
    First, we will need to check if the node with the given value is present or not in the tree. If found then there are 3 cases for deleting a node from BST: 
    1. First case: deleting node is the leaf node. Simply delete the node from the tree.
    2. Second case: deleting node has 1 child node. Follow these steps:
        2.1. Replace that node with its child node.
        2.2. Remove the child node from its original position.
    3. Third case: deleting node has 2 children. Follow these steps:
        3.1. Get the inorder successor of that node.
        3.2. Replace the node with the inorder successor.
        3.3. Remove the inorder successor from its original position.
*/
