/*
 * Author: Deean
 * Date: 2022-10-02 21:34
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        dfs(root.right);
        values.push(root.val);
    }

    dfs(root);
    return values;
};

console.log(postorderTraversal(TreeNode.create("[1,null,2,3]")));
 