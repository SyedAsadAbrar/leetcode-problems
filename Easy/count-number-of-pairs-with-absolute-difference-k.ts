// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

function countKDifference(nums: number[], k: number): number {
  const numsFrequency = new Map<number, number>();
  let count = 0;

  nums.forEach((num) => {
    const neg = num - k;
    const pos = num + k;

    // More on '??' operator
    // https://javascript.info/nullish-coalescing-operator
    count += (numsFrequency.get(pos) ?? 0) + (numsFrequency.get(neg) ?? 0);

    numsFrequency.set(num, (numsFrequency.get(num) ?? 0) + 1);
  });

  return count;
}
