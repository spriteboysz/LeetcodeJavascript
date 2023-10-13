/*
 * Author: Deean
 * Date: 2023-10-09 23:29
 * FilePath: LCP
 * Description: LCR 174. 寻找二叉搜索树中的目标节点
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} cnt
 * @return {number}
 */
var findTargetNode = function (root, cnt) {
    var dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    let values = [];
    dfs(root);
    return values[values.length - cnt];
};

console.log(findTargetNode(TreeNode.create("[7, 3, 9, 1, 5]"), 2));