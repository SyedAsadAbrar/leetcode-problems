// Problem Link: https://leetcode.com/problems/palindrome-number
// This can be done easily using string comparison but was only
// done this way to fulfill the follow-up quesiton which was to
// do it without turning it into a string
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  var num = x;
  const list = [];
  var temp = 0;
  var forward = 0;
  var backward = 0;
  while (num > 0) {
    temp = (((num / 10).toFixed(1) - (num / 10).toFixed(0)) * 10).toFixed(0);
    list.push(temp);
    num = parseInt(num / 10);
  }

  backward = list.length - 1;

  while (forward < backward) {
    if (list[forward] !== list[backward]) {
      return false;
    }
    forward += 1;
    backward -= 1;
  }
  return true;
};
