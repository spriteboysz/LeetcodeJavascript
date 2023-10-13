/*
 * Author: Deean
 * Date: 2023-10-09 23:33
 * FilePath: LCP
 * Description: LCR 175. 计算二叉树的深度
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function (root) {
    if (!root) return 0;
    return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
};

console.log(calculateDepth(TreeNode.create("[1, 2, 2, 3, null, null, 5, 4, null, null, 4]")));