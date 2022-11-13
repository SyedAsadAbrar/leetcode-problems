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
  var pointer = head;
  var evenPointers = [];
  var oddPointers = [];
  var index = 0;
  var resultPointer = head;
  var count = 0;
  var tempIteratingPointer;
  var diffLengthConditionFixingPointer;
  while (pointer) {
    if (pointer) {
      index += 1;
      if (index % 2 === 0) {
        evenPointers.push(pointer);
      } else {
        oddPointers.push(pointer);
      }
    }
    pointer = pointer.next;
    if (index % 2 === 0) {
      evenPointers[evenPointers.length - 1].next = null;
    } else {
      oddPointers[oddPointers.length - 1].next = null;
    }
  }

  if (!evenPointers.length) {
    return resultPointer;
  }

  if (oddPointers.length || evenPointers.length) {
    resultPointer = evenPointers.shift();
    count += 1;
    tempIteratingPointer = resultPointer;

    while (count < index) {
      if (count % 2 === 0) {
        pointer = evenPointers.shift();
      } else {
        pointer = oddPointers.shift();
      }
      tempIteratingPointer.next = pointer === undefined ? null : pointer;
      diffLengthConditionFixingPointer = tempIteratingPointer;
      tempIteratingPointer = tempIteratingPointer.next;
      count += 1;
    }

    if (oddPointers.length) {
      pointer = oddPointers.shift();
      diffLengthConditionFixingPointer.next =
        pointer === undefined ? null : pointer;
      diffLengthConditionFixingPointer = diffLengthConditionFixingPointer.next;
    }
    if (evenPointers.length) {
      pointer = evenPointers.shift();
      diffLengthConditionFixingPointer.next =
        pointer === undefined ? null : pointer;
      diffLengthConditionFixingPointer = diffLengthConditionFixingPointer.next;
    }
  }
  return resultPointer;
};
