class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
    this.keyVal = 0;
    this.stackSize = 0;

  }

  push(val) {
    this.storage[this.keyVal] = val;
    this.keyVal++;
    this.stackSize++;
  }

  pop() {
    delete this.storage[this.keyVal];
    this.keyVal--;
    this.stackSize--;
    return this.storage[this.keyVal];
  }

  size() {
    return Math.max(this.stackSize, 0);
  }
}