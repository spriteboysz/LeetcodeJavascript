/*
 * Author: Deean
 * Date: 2022-10-05 22:37
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    if (!root) return 0;
    let max = 1, queue = [[root, 1]]
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [node, index] = queue.shift();
            if (node.left) queue.push([node.left, (index * 2) % Number.MAX_SAFE_INTEGER]);
            if (node.right) queue.push([node.right, (index * 2 + 1) % Number.MAX_SAFE_INTEGER]);
        }
        if (queue.length) {
            let width = queue[queue.length - 1][1] - queue[0][1] + 1;
            max = Math.max(max, width);
        }
    }
    return max;
};

console.log(widthOfBinaryTree(TreeNode.create("[1,3,2,5,null,null,9,6,null,7]")));
 