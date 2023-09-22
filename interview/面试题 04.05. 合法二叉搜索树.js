/*
 * Author: Deean
 * Date: 2023-09-22 23:09
 * FilePath: interview
 * Description:面试题 04.05. 合法二叉搜索树
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    /**
     * @param {TreeNode} root
     * @return void
     */
    var dfs = function (root) {
        if (root === null) return;
        dfs(root.left);
        nodes.push(root.val);
        dfs(root.right);
    }

    if (root === null) return true;
    var nodes = [];
    dfs(root);
    for (let i = 1, n = nodes.length; i < n; i++) {
        if (nodes[i - 1] >= nodes[i]) {
            return false;
        }
    }
    return true;
};
console.log(isValidBST(new TreeNode.create("[5,1,4,null,null,3,6]")));