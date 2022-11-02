// Problem Link: https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const result = [];
  var invalidMove = false;
  for (bracket of s.split("")) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      result.push(bracket);
    } else if (
      (bracket === ")" && result[result.length - 1] === "(") ||
      (bracket === "}" && result[result.length - 1] === "{") ||
      (bracket === "]" && result[result.length - 1] === "[")
    ) {
      result.pop();
    } else {
      invalidMove = true;
      break;
    }
  }
  if (result.length || invalidMove) {
    return false;
  }
  return true;
};
