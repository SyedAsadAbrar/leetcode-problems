// https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let prev;
  let curr = head;
  let oldHead = head;
  let counter = 0;
  let iter = head;
  let length = 0;

  if (!head || !head.next) {
    return head;
  }

  while (iter) {
    iter = iter.next;
    length++;
  }

  const redefinedK = k % length;

  while (counter < redefinedK) {
    while (curr && curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    curr.next = oldHead;
    oldHead = curr;
    counter++;
  }

  return curr;
}
