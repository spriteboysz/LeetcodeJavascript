/*
 * Author: Deean
 * Date: 2022-10-04 21:51
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    const values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    let minimum = Number.MAX_VALUE;
    for (let i = 1; i < values.length; i++) {
        minimum = Math.min(minimum, values[i] - values[i - 1]);
    }
    return minimum;
};

console.log(minDiffInBST(TreeNode.create("[1,0,48,null,null,12,49]")));
 