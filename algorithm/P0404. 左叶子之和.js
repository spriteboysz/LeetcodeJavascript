/*
 * Author: Deean
 * Date: 2022-10-06 23:06
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    if (root == null) return 0;
    let sum = 0;
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }
    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

console.log(sumOfLeftLeaves(TreeNode.create("[3,9,20,null,null,15,7]")));
 