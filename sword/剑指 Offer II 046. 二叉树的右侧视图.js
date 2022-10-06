/*
 * Author: Deean
 * Date: 2022-10-06 21:59
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    const right = [], queue = [root];
    while (queue.length) {
        let last = 0, size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            last = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        right.push(last);
    }
    return right;
};
console.log(rightSideView(TreeNode.create("[1,2,3,null,5,null,4]")));
 