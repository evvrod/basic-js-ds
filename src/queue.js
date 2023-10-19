const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) { this.queue = new ListNode(value); } 
    else {
      let current = this.queue;
      while (current.next) { current = current.next; }
      console.log(current)
      current.next = new ListNode(value);
    }
  }
  

  dequeue() {
    if (!this.queue) { throw new Error('Error'); }
    else { 
      let delEl = this.queue;
      this.queue = delEl.next;
      this.length--;

      return delEl.value;
    }
  }

  // constructor() {
  //   this.head = null;
  //   this.length = 0;
  // }

  // getUnderlyingList() {
  //   return this.head;
  // }

  // enqueue(value) {
  //   if (this.length === 0) {
  //     this.head = new ListNode(value);
  //   } else {
  //     let current = this.head;
  //     for (let i = 0; i < this.length - 1; i++) { current = current.next }
  //     current.next = new ListNode(value);
  //   }
  //   this.length++;
  // }

  // dequeue() {
  //   if (this.length === 0) { throw new Error('error'); }
  //   else {
  //     let delEl = this.head;

  //     this.head = delEl.next;

  //     this.length--;

  //     return delEl.value;
  //   }
  // }
}

module.exports = {
  Queue
};
