const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    if (this.last === null) return 0;
    if (this.last === this.first) return 1;
    let counter = 2;
    let current = this.last;
    while (current.next !== this.first) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  enqueue(element) {
    const node = new ListNode();
    node.value = element;
    if (this.size === 0) {
      this.last = node;
      this.first = node;
      node.next = null;
    } else {
      node.next = this.last;
      this.last = node;
    }
  }

  dequeue() {
    const resultValue = this.first.value;
    if (this.size === 0) {
      throw new Error();
    } else if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      let current = this.last;
      while (current.next !== this.first) {
        current = current.next;
      }
      current.next = null;
      this.first = current;
    }
    return resultValue;
  }
}

module.exports = Queue;
