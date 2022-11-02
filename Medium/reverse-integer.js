// Problem Link: https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegativeInteger = x < 0;
  const reversedNum =
    (isNegativeInteger ? "-" : "") +
    (isNegativeInteger ? x * -1 : x).toString().split("").reverse().join("");
  return reversedNum < -Math.pow(2, 31) || reversedNum > Math.pow(2, 31) - 1
    ? 0
    : reversedNum;
};
