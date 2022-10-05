/*
 * Author: Deean
 * Date: 2022-10-05 22:19
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let avg = [], queue = [root];
    while (queue.length) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        avg.push(level.reduce((a, b) => a + b) / level.length);
    }
    return avg;
};

let root = TreeNode.create("[3,9,20,15,7]");
console.log(averageOfLevels(root));
 