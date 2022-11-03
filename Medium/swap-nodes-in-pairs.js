// Problem Link: https://leetcode.com/problems/swap-nodes-in-pairs/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  var newHead;

  printList(head);

  var first = head;
  var second = first.next;
  var third;
  var temp;

  if (second.val) {
    newHead = second;
  }

  while (second) {
    console.log("first", first);
    console.log("second", second);
    third = second.next;
    temp = second;
    temp.next = first;
    first.next = third;

    console.log("third", third);

    first = second.next;
    second = first.next;

    // printList(newHead);
  }
  printList(newHead);
};

const printList = (head) => {
  var ptr = head;
  var str = "";
  while (ptr) {
    str += ptr.val + " -> ";
    ptr = ptr.next;
  }
  console.log(str);
};
