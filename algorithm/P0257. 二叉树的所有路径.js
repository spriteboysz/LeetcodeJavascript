/*
 * Author: Deean
 * Date: 2022-10-05 20:38
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = [];

    function dfs(root, path) {
        if (!root) return;
        path += root.val.toString();
        if (!root.left && !root.right) {
            paths.push(path);
        } else {
            path += "->";
            dfs(root.left, path);
            dfs(root.right, path);
        }
    }

    dfs(root, "");
    return paths;
};

console.log(binaryTreePaths(TreeNode.create("[1,2,3,null,5]")));
 