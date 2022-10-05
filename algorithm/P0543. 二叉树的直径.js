/*
 * Author: Deean
 * Date: 2022-10-05 21:41
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = Number.MIN_VALUE;

    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(left + right + 1, max);
        return Math.max(left, right) + 1;
    }

    dfs(root);
    return max - 1;
};

console.log(diameterOfBinaryTree(TreeNode.create("[1,2,3,4,5]")));
 