// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let iter = head;
  const set = new Set();

  while (iter && iter.next) {
    if (!set.has(iter)) {
      set.add(iter);
    } else {
      return true;
    }
    iter = iter.next;
  }
  return false;
}
