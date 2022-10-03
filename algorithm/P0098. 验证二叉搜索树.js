/*
 * Author: Deean
 * Date: 2022-10-03 22:40
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    for (let i = 1; i < values.length; i++) {
        if (values[i - 1] >= values[i]) return false;
    }
    return true;
};

console.log(isValidBST(TreeNode.create("[5,1,4,null,null,3,6]")));
 