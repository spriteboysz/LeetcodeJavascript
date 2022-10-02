/*
 * Author: Deean
 * Date: 2022-10-02 18:02
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0;

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
        dfs(root.right);
    }

    dfs(root);
    return sum;
};

let root = TreeNode.create("[10,5,15,3,7,13,18,1,null,6]"), low = 6, high = 10;
console.log(rangeSumBST(root, low, high));
 