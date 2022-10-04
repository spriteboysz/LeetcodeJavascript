/*
 * Author: Deean
 * Date: 2022-10-04 10:32
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;
    let left = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = left;
    return root;
};

console.log(invertTree(TreeNode.create("[2,1,3]")).toString());
 