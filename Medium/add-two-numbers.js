// Problem Link: https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var l3 = new ListNode(undefined, undefined);
  var pointer = l3;
  var immediateSum = 0;
  var toCarry = 0;
  while (l1 || l2) {
    immediateSum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0);

    if (toCarry === 1) {
      immediateSum += toCarry;
      toCarry = 0;
    }

    pointer.val = immediateSum % 10;
    toCarry = Math.floor(immediateSum / 10, 1);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;

    if (l1 || l2) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
  }

  if (toCarry) {
    pointer.next = new ListNode(1, undefined);
  }
  return l3;
};
