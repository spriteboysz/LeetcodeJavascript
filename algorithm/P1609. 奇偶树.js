/*
 * Author: Deean
 * Date: 2022-10-06 23:17
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let queue = [root], index = 0;
    while (queue.length) {
        const level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (index === 1) level.reverse();
        if (level.some(num => num % 2 === index)) return false;
        index = 1 - index;
        for (let i = 1; i < level.length; i++) {
            if (level[i - 1] >= level[i]) return false;
        }
    }
    return true;
};

let root = TreeNode.create("[1,10,4,3,null,7,9,12,8,6,null,null,2]");
console.log(isEvenOddTree(root));
 