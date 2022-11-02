// Problem Link: https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const answer = [];
  nums.some((num, index, arr) => {
    if (
      arr.includes(target - num) &&
      !answer.includes(index) &&
      arr.indexOf(target - num) !== index
    ) {
      answer.push(index);
      answer.push(arr.indexOf(target - num));
      return true;
    }
  });
  return answer;
};
