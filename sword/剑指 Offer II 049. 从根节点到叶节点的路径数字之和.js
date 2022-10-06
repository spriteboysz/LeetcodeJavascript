/*
 * Author: Deean
 * Date: 2022-10-06 21:29
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    function dfs(root, sum) {
        if (!root) return 0;
        sum = sum * 10 + root.val;
        if (!root.left && !root.right) return sum;
        return dfs(root.left, sum) + dfs(root.right, sum);
    }

    return dfs(root, 0);
};

console.log(sumNumbers(TreeNode.create("[4,9,0,5,1]")));
 