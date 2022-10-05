/*
 * Author: Deean
 * Date: 2022-10-06 00:01
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    let largest = [], queue = [root];
    while (queue.length) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        largest.push(Math.max(...level));
    }
    return largest;
};

console.log(largestValues(TreeNode.create("[1,2,3]")));
 