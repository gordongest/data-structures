class Queue {

  constructor() {

    this.storage = {};
    this.keyVal = 0;
    this.queueSize = 0;
    this.oldestKey = -1;

  }

  enqueue(val) {
    this.storage[this.keyVal] = val;
    this.keyVal++;
    this.queueSize++;
  }

  dequeue() {
    delete this.storage[this.oldestKey];
    this.oldestKey++;
    this.queueSize--;
    return this.storage[this.oldestKey];
  }

  size() {
    return Math.max(this.queueSize, 0);
  }
}
