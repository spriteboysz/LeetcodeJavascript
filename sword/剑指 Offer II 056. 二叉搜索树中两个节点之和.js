/*
 * Author: Deean
 * Date: 2022-10-02 22:51
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    let left = 0, right = values.length - 1;
    while (left < right) {
        if (values[left] + values[right] < k) {
            left++
        } else if (values[left] + values[right] > k) {
            right--;
        } else {
            return true;
        }
    }
    return false;
};

let root = TreeNode.create("[8,6,10,5,7,9,11]");
console.log(findTarget(root, 12));
console.log(findTarget(root, 22));
