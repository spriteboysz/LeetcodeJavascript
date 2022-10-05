/*
 * Author: Deean
 * Date: 2022-10-05 19:57
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;
    let nodes = [];

    function dfs(root) {
        if (!root) return null;
        nodes.push(root);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    console.log(root.toString());
};


flatten(TreeNode.create("[1,2,5,3,4,null,6]"))
 