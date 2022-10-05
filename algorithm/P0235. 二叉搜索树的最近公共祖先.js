/*
 * Author: Deean
 * Date: 2022-10-05 20:25
 * FilePath: algorithm
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
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};

let root = TreeNode.create("[6,2,8,0,4,7,9,null,null,3,5]");
let p = new TreeNode(2), q = new TreeNode(4);
console.log(lowestCommonAncestor(root, p, q).toString());
 