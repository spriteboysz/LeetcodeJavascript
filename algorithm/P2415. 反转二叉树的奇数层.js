/*
 * Author: Deean
 * Date: 2023-06-13 22:54
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    if (root === null) return root;
    let queue = [root];
    let high = 0;
    while (queue.length > 0) {
        let nodes = [], values = [];
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            if (high % 2 === 1) {
                nodes.push(node);
                values.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (high % 2 === 1) {
            values.reverse();
            for (let i = 0, n = nodes.length; i < n; i++) {
                nodes[i].val = values[i];
            }
        }
        high += 1;
    }
    return root;
};

let root = TreeNode.create("[2,3,5,8,13,21,34]");
console.log(reverseOddLevels(root).toString());