/*
 * Author: Deean
 * Date: 2023-09-19 23:25
 * FilePath: LCP
 * Description:LCR 053. 二叉搜索树中的中序后继
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    var nodes = [];
    var dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        nodes.push(root);
        dfs(root.right);
    }

    dfs(root);
    var pos = -1;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].val === p.val) {
            pos = i;
            break;
        }
    }
    return nodes[pos + 1];
};

console.log(inorderSuccessor(new TreeNode.create("[5,3,6,2,4,null,null,1]"), new TreeNode(6)));