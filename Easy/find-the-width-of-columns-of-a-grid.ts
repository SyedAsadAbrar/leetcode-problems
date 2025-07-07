// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/

function findColumnWidth(grid: number[][]): number[] {
  const result: number[] = [];
  const m = grid.length;
  const n = grid[0].length;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    max = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < m; j++) {
      const length = grid[j][i].toString().length;
      max = length > max ? length : max;
    }
    result.push(max);
  }
  return result;
}
