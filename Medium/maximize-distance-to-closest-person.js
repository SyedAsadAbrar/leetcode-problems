// Problem Link: https://leetcode.com/problems/maximize-distance-to-closest-person/
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const distance = [];
  seats.forEach((seat, index) => {
    if (seat === 1) {
      distance.push(0);
    } else if (index === 0) {
      distance.push(seats.length);
    } else {
      distance.push(distance[index - 1] + 1);
    }
  });
  seats.forEach((seat, index, arr) => {
    const reverseIndex = arr.length - 1 - index;
    if (index !== 0 && reverseIndex !== 0 && distance[reverseIndex] !== 0) {
      const nextValue = distance[reverseIndex + 1];
      const prevValue = distance[reverseIndex - 1];
      distance[reverseIndex] = Math.min(nextValue, prevValue) + 1;
    }
    if (reverseIndex === 0 && distance[reverseIndex] !== 0) {
      const nextValue = distance[reverseIndex + 1];
      distance[reverseIndex] = nextValue + 1;
    }
  });
  return Math.max(...distance);
};
