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
  if (x < 10) {
    return true;
  }
  var num = x;
  var reverseNum = 0;
  var temp = 0;
  while (num > 0) {
    temp = parseInt(((num / 10 - ~~(num / 10)) * 10).toFixed(0));
    reverseNum = reverseNum * 10 + temp;
    num = parseInt(num / 10);
  }

  return reverseNum === x;
};
