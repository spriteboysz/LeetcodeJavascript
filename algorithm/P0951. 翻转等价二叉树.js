/*
 * Author: Deean
 * Date: 2022-10-05 23:12
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.val !== root2.val) return false;
    return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) ||
        flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
};

let root1 = TreeNode.create("[1,2,3,4,5,6,null,null,null,7,8]");
let root2 = TreeNode.create("[1,3,2,null,6,4,5,null,null,null,null,8,7]");

console.log(flipEquiv(root1, root2));
 