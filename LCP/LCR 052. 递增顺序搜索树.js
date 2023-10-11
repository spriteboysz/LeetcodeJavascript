/*
 * Author: Deean
 * Date: 2023-10-08 21:53
 * FilePath: LCP
 * Description:LCR 052. 递增顺序搜索树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    var dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        nodes.push(root);
        dfs(root.right);
    }

    if (!root) return root;
    let nodes = [];
    dfs(root);
    for (let i = 0, n = nodes.length; i < n - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    return nodes[0];
};

console.log(increasingBST(TreeNode.create("[5,3,6,2,4,null,8,1,null,null,null,7,9]")).toString());