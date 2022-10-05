/*
 * Author: Deean
 * Date: 2022-10-05 22:13
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
    if (!root) return "";
    if (!root.left && !root.right) return root.val.toString();
    if (!root.right) {
        return root.val + "(" + tree2str(root.left) + ")";
    }
    return root.val + "(" + tree2str(root.left) + ")(" + tree2str(root.right) + ")";
};

console.log(tree2str(TreeNode.create("[1,2,3,4]")));
console.log(tree2str(TreeNode.create("[1,2,3,null,4]")));
