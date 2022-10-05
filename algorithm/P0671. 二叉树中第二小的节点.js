/*
 * Author: Deean
 * Date: 2022-10-05 22:44
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    const set = new Set();

    function dfs(root) {
        if (!root) return;
        set.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    if (set.size === 1) return -1;
    return Array.from(set).sort((a, b) => a - b)[1];
};

console.log(findSecondMinimumValue(TreeNode.create("[2,2,5,null,null,5,7]")));
 