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
    return this.tree;
  }

  add(data, node = this.tree) {
    if (!this.tree) { this.tree = new Node(data); }
    else {
      if (!node) return new Node(data);

      if (node.data < data) { node.right = this.add(data, node.right); }
      else if (node.data > data) { node.left = this.add(data, node.left); }
      else { return node; }

      return node;
    }
  }

  has(data) {
    let node = this.find(data, this.tree);
    if (node) return true;
    if (!node) return false;
  }

  find(data, node = this.tree) {
    if (!node) return null;
    if (node.data < data) { return this.find(data, node.right); }
    else if (node.data > data) { return this.find(data, node.left); }
    else if (node.data === data) { return node; }
  }

  remove(data, node = this.tree) {
    if (!node) return null;
    if (node.data < data) {
      node.right = this.remove(data, node.right);
      return node;
    }
    else if (node.data > data) {
      node.left = this.remove(data, node.left);
      return node;
    }
    else {
      if (!node.right && !node.left) return null;
      if (!node.right) {
        node = node.left;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      node.data = this.min(node.right);
      node.right = this.remove(node.data, node.right);
      return node;
    }
  }

  min(node = this.tree) {
    if (!node) return null;

    while (node.left) { node = node.left; }
    return node.data;
  }

  max() {
    if (!this.tree) return null;
    let node = this.tree;
    while (node.right) { node = node.right; }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};