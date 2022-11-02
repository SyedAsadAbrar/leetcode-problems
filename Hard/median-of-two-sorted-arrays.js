// Problem Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const combinedArr = [];

  var greaterArr = [...nums1];
  var smallerArr = [...nums2];

  var indexA = 0;
  var indexB = 0;

  if (greaterArr.length < smallerArr.length) {
    greaterArr = smallerArr;
    smallerArr = nums1;
  }

  for (var i = 0; i < greaterArr.length + smallerArr.length; i++) {
    if (indexA === greaterArr.length) {
      smallerArr
        .slice(indexB, smallerArr.length)
        .forEach((num) => combinedArr.push(num));
      break;
    }
    if (indexB === smallerArr.length) {
      greaterArr
        .slice(indexA, greaterArr.length)
        .forEach((num) => combinedArr.push(num));
      break;
    }
    if (greaterArr[indexA] < smallerArr[indexB]) {
      combinedArr.push(greaterArr[indexA]);
      indexA += 1;
    } else {
      combinedArr.push(smallerArr[indexB]);
      indexB += 1;
    }
  }

  if (combinedArr.length % 2) {
    return combinedArr[Math.floor(combinedArr.length / 2)];
  }
  return (
    (combinedArr[Math.floor(combinedArr.length / 2) - 1] +
      combinedArr[Math.floor(combinedArr.length / 2)]) /
    2
  );
};
