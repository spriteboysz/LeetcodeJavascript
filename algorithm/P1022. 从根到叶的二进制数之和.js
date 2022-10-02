/*
 * Author: Deean
 * Date: 2022-10-02 21:53
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    function dfs(root, val) {
        if (!root) return 0;
        val = val * 2 + root.val;
        if (!root.left && !root.right) {
            return val;
        }
        return dfs(root.left, val) + dfs(root.right, val);
    }

    return dfs(root, 0);
};

let root = TreeNode.create("[1,0,1,0,1,0,1]")
console.log(sumRootToLeaf(root));
 