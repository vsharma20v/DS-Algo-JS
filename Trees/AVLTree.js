// Node Class
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
    this.height = 0; // height of single node is 0
  }
}

// AVL Tree Class
class AVLTree {
  constructor() {
    this.root = null;
  }

  // checks if AVL tree is empty => O(1)
  isEmpty() {
    return this.root === null;
  }

  // return height of the node => O(1)
  getHeight(node) {
    if (node === null) return -1; // height of empty tree is -1
    return node.height;
  }

  // return balance factor of a node => O(1)
  getBalanceFactor(node) {
    if (node === null) return 0; // Balance factor of empty tree is 0
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // left rotation for right-right imbalance case & x is the node we are rotating around => O(1)
  leftRotation(x) {
    const y = x.right;
    const yLeftChild = y.left;
    y.left = x;
    x.right = yLeftChild;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }

  // right rotation for left-left imbalance case & x is the node we are rotating around => O(1)
  rightRotation(x) {
    const y = x.left;
    const yRightChild = y.right;
    y.right = x;
    x.left = yRightChild;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }

  // recursively insert a node either as left or right child => O(log n)
  insertNode(root, node) {
    if (node.data < root.data)
      root.left = root.left ? this.insertNode(root.left, node) : node;
    else root.right = root.right ? this.insertNode(root.right, node) : node;

    // at each recursive step we start calculating height & balance factor of node (from bottom to top)
    root.height =
      Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    const balanceFactor = this.getBalanceFactor(root);

    // Balance factor is positive, it means LL or LR imbalance case
    if (balanceFactor > 1) {
      if (node.data < root.left.data)
        return this.rightRotation(root); // LL case
      else if (node.data > root.left.data) {
        // LR case
        root.left = this.leftRotation(root.left);
        return this.rightRotation(root);
      }
    }
    // Balance factor is negative, it means RR or RL imbalance case
    if (balanceFactor < -1) {
      if (node.data > root.right.data)
        return this.leftRotation(root); // RR case
      else if (node.data < root.right.data) {
        // RL case
        root.right = this.rightRotation(root.right);
        return this.leftRotation(root);
      }
    }

    return root;
  }

  // insert a value in AVL => O(log n)
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.root = node;
    else this.root = this.insertNode(this.root, node);
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
    if (root === null) return root; // empty tree, we can't delete anything
    if (value < root.data) root.left = this.deleteNode(root.left, value);
    else if (value > root.data) root.right = this.deleteNode(root.right, value);
    else {
      if (!root.left && !root.right) return null; // deleting node is leaf node
      if (!root.left) return root.right; // deleting node has only right child
      else if (!root.right) return root.left; // deleting node has only left child
      root.data = this.min(root.right); // deleting node has two children so finding min node from right subtree & assigning it to root node
      root.right = this.deleteNode(root.right, root.data); // deleting the duplicate node in right subtree
    }

    // at each recursive step we start calculating height & balance factor of node (from bottom to top)
    root.height =
      Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    const balanceFactor = this.getBalanceFactor(root);
    // Balance factor is positive, it means LL or LR imbalance case
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(root.left) >= 0)
        return this.rightRotation(root); // LL case
      else {
        root.left = this.leftRotation(root.left); // LR case
        return this.rightRotation(root);
      }
    }
    // Balance factor is negative, it means RR or RL imbalance case
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(root.right) <= 0)
        return this.leftRotation(root); // RR case
      else {
        root.right = this.rightRotation(root.right); // RL case
        return this.leftRotation(root);
      }
    }
    return root;
  }
}

const avl = new AVLTree();
console.log(
  avl.isEmpty(),
  avl.getHeight(avl.root),
  avl.getBalanceFactor(avl.root)
);
// tree 1
// avl.insert(33);
// avl.insert(13);
// avl.insert(53);
// avl.insert(9);
// avl.insert(21);
// avl.insert(61);
// avl.insert(8);
// avl.insert(11);

// tree 2
// avl.insert(35);
// avl.insert(50);
// avl.insert(40);
// avl.insert(25);
// avl.insert(30);
// avl.insert(60);
// avl.insert(78);
// avl.insert(20);
// avl.insert(28);

// tree 3
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(60);

avl.levelOrder();
avl.preOrder();
console.log(avl.root);
avl.delete(40);
avl.levelOrder();
avl.preOrder();
console.log(avl.root);
