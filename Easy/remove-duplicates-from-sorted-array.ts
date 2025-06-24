// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let k = 0;
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1;
      k += 1;
    } else {
      nums[i] = Number.NEGATIVE_INFINITY;
    }
  }
  nums.sort((a, b) => {
    if (a === Number.NEGATIVE_INFINITY && b !== Number.NEGATIVE_INFINITY) {
      return 1;
    }
    if (a !== Number.NEGATIVE_INFINITY && b === Number.NEGATIVE_INFINITY) {
      return -1;
    }
    return 0;
  });
  return k;
}
