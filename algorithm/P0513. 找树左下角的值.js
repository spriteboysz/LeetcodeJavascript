/*
 * Author: Deean
 * Date: 2022-10-05 21:30
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let left = 0, queue = [root];
    while (queue.length) {
        let size = queue.length, level = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        left = level[0];
    }
    return left;
};

console.log(findBottomLeftValue(TreeNode.create("[1,2,3,4,null,5,6,null,null,7]")));
 