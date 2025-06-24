// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = nums1.length - 1;
  let j = 0;

  while (j < nums2.length) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[j];
      j++;
    }
    i--;
  }

  nums1.sort((a, b) => a - b);
}
