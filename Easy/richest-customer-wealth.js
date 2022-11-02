// Problem Link: https://leetcode.com/problems/richest-customer-wealth/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maxOf = (a, b) => (a > b ? a : b);

var maximumWealth = function (accounts) {
  return accounts
    .map((i) => i.reduce((prev, current) => prev + current))
    .reduce((prev, current) => maxOf(prev, current));
};
