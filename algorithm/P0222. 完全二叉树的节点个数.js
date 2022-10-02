/*
 * Author: Deean
 * Date: 2022-10-02 19:08
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    let cnt = 0;

    function dfs(root) {
        if (!root) return;
        cnt++;
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    return cnt;
};

console.log(countNodes(TreeNode.create("[1,2,3,4,5,6]")));
 