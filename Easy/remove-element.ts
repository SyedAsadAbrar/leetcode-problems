// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = -1;
    } else {
      counter++;
    }
  }
  nums.sort((a, b) => {
    if (a === -1 && b !== -1) {
      return 1;
    }
    if (a !== -1 && b === -1) {
      return -1;
    }
    return 0;
  });
  return counter;
}
