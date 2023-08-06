/*
 * Author: Deean
 * Date: 2023-08-06 18:54
 * FilePath: algorithm
 * Description:113. 路径总和 II
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    var dfs = function (root, path, paths, sum) {
        if (root === null) return;
        path.push(root.val);
        if (root.val === sum && root.left === null && root.right === null) {
            paths.push([...path]);
        }
        dfs(root.left, path, paths, sum - root.val);
        dfs(root.right, path, paths, sum - root.val);
        path.pop();
    }
    
    let paths = [], path = [];
    dfs(root, path, paths, targetSum);
    return paths;
};

console.log(pathSum(TreeNode.create("[5,4,8,11,null,13,4,7,2,null,null,5,1]"), 22));