/*
 * Author: Deean
 * Date: 2022-10-02 20:55
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    const values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root1);
    dfs(root2);
    return values.sort((a, b) => a - b);
};

let root1 = TreeNode.create("[1,null,8]"), root2 = TreeNode.create("[8,1]");
console.log(getAllElements(root1, root2));
 