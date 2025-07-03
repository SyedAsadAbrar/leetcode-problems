// https://leetcode.com/problems/lru-cache/

class DoublyLinkedListNode<T> {
  key: number;
  value: T | null;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;

  constructor(
    key: number,
    value: T | null,
    next?: DoublyLinkedListNode<T> | null,
    prev?: DoublyLinkedListNode<T> | null
  ) {
    this.key = key;
    this.value = value;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

class DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  _length: number = 0;
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  removeNode(currNode: DoublyLinkedListNode<T>): T {
    const prev = currNode.prev;
    const next = currNode.next;

    if (prev || next) {
      if (prev) {
        prev.next = next;
      } else {
        this.head = next;
      }
      if (next) {
        next.prev = prev;
      } else {
        this.tail = prev;
      }
    }
    currNode.prev = null;
    currNode.next = null;
    this._length--;
    return currNode.key as T;
  }

  removeFromStart(): T {
    return this.removeNode(this.head as DoublyLinkedListNode<T>);
  }

  insertAtStart(node: DoublyLinkedListNode<T>): void {
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    if (this.length === 0) {
      this.tail = node;
    }
    this.head = node;
    this._length++;
  }

  insertAtEnd(node: DoublyLinkedListNode<T>): void {
    node.prev = this.tail;
    if (this.tail) {
      this.tail.next = node;
    }
    if (this.length === 0) {
      this.head = node;
    }
    this.tail = node;
    this._length++;
  }

  toString(): string {
    let iter = this.head;
    const stringArr: string[] = ["←"];
    while (iter) {
      if (iter.prev) {
        stringArr.push("←");
      }
      stringArr.push(iter.key.toString());
      if (iter.next) {
        stringArr.push("→");
      }
      iter = iter.next;
    }
    stringArr.push("→");
    return stringArr.join(" ").replaceAll("→ ←", "⇆");
  }
}

// Note - Exceeds output limit, should use Map instead
class LRUCacheOriginalWithSelfDefinedDoublyLinkedList {
  cache: object = {};
  accessLinkedList: DoublyLinkedList<number>;
  capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.accessLinkedList = new DoublyLinkedList();
  }

  _prettifyCache(): string {
    return JSON.parse(
      JSON.stringify(
        Object.keys(this.cache).reduce((accumulated, curr) => {
          accumulated[curr] = this.cache[curr].value;
          return accumulated;
        }, {})
      )
    );
  }

  _handleEvictionFromLRU(key, value, toDelete: boolean = false) {
    const node = new DoublyLinkedListNode(key, value);
    if (
      this.accessLinkedList.length === this.capacity &&
      !(key in this.cache)
    ) {
      const leastUsedKey = this.accessLinkedList.removeFromStart();
      if (leastUsedKey && toDelete) {
        delete this.cache[leastUsedKey];
      }
    }
    if (this.cache[key]) {
      this.accessLinkedList.removeNode(this.cache[key]);
      if (toDelete) {
        delete this.cache[key];
      }
    }

    this.accessLinkedList.insertAtEnd(node);
    this.cache[key] = node;

    return node;
  }

  get(key: number): number {
    if (key in this.cache) {
      const value = this.cache[key].value;
      this._handleEvictionFromLRU(key, value);
      return value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    this._handleEvictionFromLRU(key, value, true);
  }
}

class LRUCache {
  cache: Map<number, number>;
  capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.cache.size === this.capacity) {
      const leastUsedKey = this.cache.has(key)
        ? key
        : this.cache.keys().next().value;
      this.cache.delete(leastUsedKey);
    } else if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
