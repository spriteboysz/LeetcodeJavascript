/*
 * Author: Deean
 * Date: 2022-10-06 22:33
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    const levels = [], queue = [root];
    while (queue.length) {
        let level = 0, size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(level);
    }
    let max = Math.max(...levels);
    return levels.indexOf(max) + 1;
};

console.log(maxLevelSum(TreeNode.create("[989,null,10250,98693,-89388,null,null,null,-32127]")));
 