/*
 * Author: Deean
 * Date: 2022-10-02 21:45
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    return values[k - 1];
};

let root = TreeNode.create("[5,3,6,2,4,null,null,1]"), k = 3;
console.log(kthSmallest(root, k));
 