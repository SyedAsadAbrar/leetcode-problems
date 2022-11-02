// Problem Link: https://leetcode.com/problems/toeplitz-matrix/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const visited = matrix.map((arr) => arr.map((num) => false));

  for (let y = 0; y < matrix.length; y++) {
    const arr = matrix[y];
    for (let x = 0; x < arr.length; x++) {
      const num = arr[x];
      if (!visited[y][x]) {
        var upNeighboursEqual = isNeighbourEqual(
          matrix,
          { x, y },
          num,
          visited,
          true
        );
        var downNeighboursEqual = isNeighbourEqual(
          matrix,
          { x, y },
          num,
          visited
        );

        if (upNeighboursEqual !== downNeighboursEqual) {
          return false;
        }
      }
    }
  }
  return true;
};

const isNeighbourEqual = (matrix, { x, y }, value, visited, up = false) => {
  const cols = matrix[0].length;
  const rows = matrix.length;
  const expectedX = up ? x - 1 : x + 1;
  const expectedY = up ? y - 1 : y + 1;

  if (expectedX < 0 || expectedX >= cols) {
    return true;
  }
  if (expectedY < 0 || expectedY >= rows) {
    return true;
  }
  if (matrix[expectedY][expectedX] !== value) {
    return false;
  }
  visited[expectedY][expectedX] = true;
  return (
    true &&
    isNeighbourEqual(matrix, { x: expectedX, y: expectedY }, value, visited, up)
  );
};

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
