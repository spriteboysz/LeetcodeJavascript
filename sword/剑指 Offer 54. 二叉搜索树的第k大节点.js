/*
 * Author: Deean
 * Date: 2022-10-05 23:50
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
    if (!root) return -1;
    let values = [];

    function dfs(root) {
        if (root === null) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    return values[values.length - k];
};

let root = TreeNode.create("[5,3,6,2,4,null,null,1]"), k = 3
console.log(kthLargest(root, k));
 