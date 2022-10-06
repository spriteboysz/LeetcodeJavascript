/*
 * Author: Deean
 * Date: 2022-10-06 21:11
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    if (!root) return 0;
    let last = [], queue = [root];
    while (queue.length) {
        last = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            last.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return last.reduce((a, b) => a + b);
};

console.log(deepestLeavesSum(TreeNode.create("[6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]")));
 