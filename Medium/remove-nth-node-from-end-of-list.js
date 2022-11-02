// Problem Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var iter = new ListNode();

  var length = 0;
  var counter = 0;

  var prev;

  iter = head;

  while (iter) {
    length += 1;
    iter = iter.next;
  }

  iter = head;

  while (counter < length - n) {
    prev = iter;
    iter = iter.next;
    counter += 1;
  }

  if (prev) {
    prev.next = iter.next;
  } else {
    head = iter.next;
  }

  return head;
};
