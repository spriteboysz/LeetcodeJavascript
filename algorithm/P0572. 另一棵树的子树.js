/*
 * Author: Deean
 * Date: 2022-10-05 21:56
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (root === null) return false;

    function dfs(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root || !subRoot) return false;
        if (root.val !== subRoot.val) return false;
        return dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right);
    }

    if (dfs(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

let root = TreeNode.create("[3,4,5,1,2,null,null,null,null,0]"), subRoot = TreeNode.create("[4,1,2]");
console.log(isSubtree(root, subRoot));
 