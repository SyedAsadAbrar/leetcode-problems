function canJump(nums: number[]): boolean {
  let result = 0;
  let idealCase = nums.length - 1;

  while (result < idealCase && nums[result]) {
    result += nums[result];
  }

  return result === idealCase;
}

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
