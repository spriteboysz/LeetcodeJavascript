/*
 * Author: Deean
 * Date: 2023-10-07 23:55
 * FilePath: LCP
 * Description: LCR 046. 二叉树的右视图
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let right = [];
    if (!root) return right;
    let queue = [root];
    while (queue.length > 0) {
        let level = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            level = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        right.push(level);
    }
    return right;
};

console.log(rightSideView(TreeNode.create("[1,2,3,null,5,null,4]")));