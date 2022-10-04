/*
 * Author: Deean
 * Date: 2022-10-04 10:34
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(TreeNode.create("[3,9,20,null,null,15,7]")));
 