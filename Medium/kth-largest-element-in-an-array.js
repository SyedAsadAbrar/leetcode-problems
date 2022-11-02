// Problem Link: https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const sortedList = nums.sort((a, b) => a - b);
  return sortedList[nums.length - k];
};
