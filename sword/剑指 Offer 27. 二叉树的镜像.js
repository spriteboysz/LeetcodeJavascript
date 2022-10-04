/*
 * Author: Deean
 * Date: 2022-10-04 10:02
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return null;
    let left = mirrorTree(root.left);
    root.left = mirrorTree(root.right);
    root.right = left;
    return root;
};

console.log(mirrorTree(TreeNode.create("[4,2,7,1,3,6,9]")).toString());
 