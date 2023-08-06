/*
 * Author: Deean
 * Date: 2023-08-06 20:09
 * FilePath: algorithm
 * Description:2583. 二叉树中的第 K 大层和
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    let level = [];
    let queue = [root];
    while (queue.length > 0) {
        let sum = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level.push(sum);
    }
    if (level.length < k) return -1;
    level.sort((a, b) => b - a);
    return level[k - 1];
};

console.log(kthLargestLevelSum(TreeNode.create("[5,8,9,2,1,3,7,4,6]"), 2));