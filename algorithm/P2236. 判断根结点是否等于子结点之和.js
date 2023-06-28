/*
 * Author: Deean
 * Date: 2022-09-25 22:29
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
    return root.val === root.left.val + root.right.val;
};

console.log(checkTree(TreeNode.create("[5,3,2]")));
 