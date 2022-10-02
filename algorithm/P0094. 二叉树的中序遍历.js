/*
 * Author: Deean
 * Date: 2022-10-02 13:19
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let values = [];

    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    return values;
};

let root = TreeNode.create("[1,null,2,3]");
console.log(inorderTraversal(root));
 