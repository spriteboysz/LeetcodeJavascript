/*
 * Author: Deean
 * Date: 2022-10-03 22:53
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let minimum = Number.MAX_VALUE;
    if (root.left) {
        minimum = Math.min(minimum, minDepth(root.left));
    }
    if (root.right) {
        minimum = Math.min(minimum, minDepth(root.right));
    }
    return minimum + 1;
};

console.log(minDepth(TreeNode.create("[2,null,3,null,4,null,5,null,6]")));
 