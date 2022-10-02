/*
 * Author: Deean
 * Date: 2022-10-02 17:56
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function (root) {
    if (!root.left && !root.right) {
        return root.val === 1;
    }
    let left = evaluateTree(root.left);
    let right = evaluateTree(root.right);
    if (root.val === 2) {
        return left || right;
    } else {
        return left && right;
    }
};

let root = TreeNode.create("[2,1,3,null,null,0,1]")
console.log(evaluateTree(root));
 