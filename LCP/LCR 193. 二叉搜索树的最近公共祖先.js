/*
 * Author: Deean
 * Date: 2023-10-10 22:47
 * FilePath: LCP
 * Description: LCR 193. 二叉搜索树的最近公共祖先
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root.val === p.val || root.val === q.val) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    return left == null ? right : right == null ? left : root;

};

console.log(lowestCommonAncestor(TreeNode.create("[6,2,8,0,4,7,9,null,null,3,5]"),
    TreeNode.create("[2]"), TreeNode.create("[8]")).toString());