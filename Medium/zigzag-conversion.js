// Problem Link: https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const answerObj = {};

  for (i = 0; i < numRows; i++) {
    answerObj[i] = [];
  }

  var count = 0;

  var toAdd = true;

  s.split("").forEach((letter, index) => {
    answerObj[count].push(letter);
    if (count < numRows - 1 && toAdd) {
      count += 1;
    } else if (count > 0) {
      count -= 1;
      toAdd = false;
    }
    if (count === 0) {
      toAdd = true;
    }
  });

  const answer = [];
  Object.keys(answerObj).forEach((arr) =>
    answer.push(...answerObj[arr].join(""))
  );

  return answer.join("");
};
