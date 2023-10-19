const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    if (!this.tree) { this.tree = new Node(data); }
    else {
        console.log(this.find(this.tree, data));
    }

  }

  has(data) {
    
  }

  find(current, data) {
      console.log(data);
      console.log(current)
        if (data < current.data && current.right) {
            return this.find(current.right, data);
        }
        else if (data>current.data && current.left) { 
            console.log('ddd')
            return this.find(current.left, data);
        }
        else if (data === current.data) { return current; }
        else return 
  }

  remove(data) {
  
  }

  min() {
    if (!this.root) return null;
    let node = this.root;

    while (!node.left) {
      node = node.left;
    }
    return node.value;
  }

  max() {
    if (!this.root) return null;
    let node = this.root;

    while (!node.right) {
      node = node.right;
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};