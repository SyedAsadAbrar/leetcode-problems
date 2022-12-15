//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }
  if (list1 && !list2) {
    return list1;
  }
  if (!list1 && list2) {
    return list2;
  }

  let head = list1.val < list2.val ? list1 : list2;

  let first = list1.val < list2.val ? list1.next : list1;
  let second = list1.val < list2.val ? list2 : list2.next;
  let temp = head;

  let firstNext = first;
  let secondNext = second;

  while (first && second) {
    firstNext = first.val < second.val ? firstNext?.next : firstNext;
    secondNext = first.val < second.val ? secondNext : secondNext.next;
    temp.next = first.val < second.val ? first : second;
    temp = temp.next;
    first = firstNext;
    second = secondNext;
  }

  while (first) {
    temp.next = first;
    temp = temp.next;
    first = first.next;
  }

  while (second) {
    temp.next = second;
    temp = temp.next;
    second = second.next;
  }

  return head;
}
