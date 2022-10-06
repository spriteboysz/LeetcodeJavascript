/*
 * Author: Deean
 * Date: 2022-10-06 22:17
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;
    if (root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
    return root;
};

let root = TreeNode.create("[3,5,1,6,2,0,8,null,null,7,4]");
let p = new TreeNode(5), q = new TreeNode(4);
console.log(lowestCommonAncestor(root, p, q));
 