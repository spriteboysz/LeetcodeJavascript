/*
 * Author: Deean
 * Date: 2022-10-04 11:44
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let nodes = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        nodes.push(root);
        dfs(root.right);
    }

    dfs(root);
    let n = nodes.length;
    for (let i = 0; i < n - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
    nodes[n - 1].left = null;
    nodes[n - 1].right = null;
    return nodes[0];
};

console.log(increasingBST(TreeNode.create("[5,1,7]")).toString());
 