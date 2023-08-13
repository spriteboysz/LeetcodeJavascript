/*
 * Author: Deean
 * Date: 2023-08-12 14:26
 * FilePath: algorithm
 * Description:112. 路径总和
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) return false;
    if (targetSum === root.val && root.left === null && root.right === null) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

let root = TreeNode.create("[5,4,8,11,null,13,4,7,2,null,null,null,1]");
console.log(hasPathSum(root, 22));