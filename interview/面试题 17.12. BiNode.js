/*
 * Author: Deean
 * Date: 2022-10-04 17:56
 * FilePath: interview
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
    if (!root) return null;
    const nodes = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        nodes.push(root);
        dfs(root.right);
    }

    dfs(root);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    return nodes[0];
};

console.log(convertBiNode(TreeNode.create("[4,2,5,1,3,null,6,0]")).toString());
 