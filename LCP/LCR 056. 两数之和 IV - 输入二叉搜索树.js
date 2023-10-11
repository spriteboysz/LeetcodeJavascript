/*
 * Author: Deean
 * Date: 2023-10-08 22:17
 * FilePath: LCP
 * Description: LCR 056. 两数之和 IV - 输入二叉搜索树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    var dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    let values = [];
    dfs(root);
    let left = 0, right = values.length - 1;
    while (left < right) {
        if (values[left] + values[right] < k) {
            left += 1;
        } else if (values[left] + values[right] > k) {
            right -= 1;
        } else {
            return true;
        }
    }
    return false;
};

console.log(findTarget(TreeNode.create("[8,6,10,5,7,9,11]"), 12));