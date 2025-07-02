// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
  const answer = [];
  if (root) {
    if (root?.left) {
      answer.push(...postorderTraversal(root.left));
    }
    if (root?.right) {
      answer.push(...postorderTraversal(root.right));
    }
    answer.push(root.val);
  }
  return answer;
}
