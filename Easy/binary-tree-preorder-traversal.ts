// https://leetcode.com/problems/binary-tree-preorder-traversal/

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

function preorderTraversal(root: TreeNode | null): number[] {
  const answer = root ? [root.val] : [];
  if (root) {
    if (root?.left) {
      answer.push(...preorderTraversal(root.left));
    }
    if (root?.right) {
      answer.push(...preorderTraversal(root.right));
    }
  }
  return answer;
}
