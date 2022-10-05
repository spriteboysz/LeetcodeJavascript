/*
 * Author: Deean
 * Date: 2022-10-05 22:58
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let values1 = [], values2 = [];

    function dfs(root, values) {
        if (!root) return;
        dfs(root.left, values);
        dfs(root.right, values);
        if (!root.left && !root.right) values.push(root.val);
    }

    dfs(root1, values1);
    dfs(root2, values2);
    return values1.join("#") === values2.join("#");
};

let root1 = TreeNode.create("[3,5,1,6,2,9,8,null,null,7,4]");
let root2 = TreeNode.create("[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]");

console.log(leafSimilar(root1, root2));
