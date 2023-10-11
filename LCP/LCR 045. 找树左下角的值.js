/*
 * Author: Deean
 * Date: 2023-10-07 23:51
 * FilePath: LCP
 * Description: LCR 045. 找树左下角的值
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let bottomLeft = root.val;
    let queue = [root];
    while (queue.length > 0) {
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            if (i === 0) bottomLeft = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return bottomLeft;
};

console.log(findBottomLeftValue(TreeNode.create("[1,2,3,4,null,5,6,null,null,7]")));