/*
 * Author: Deean
 * Date: 2022-09-25 22:32
 * FilePath: common
 * Description: 
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Encodes a tree to a single string.
 *
 * @return {string}
 */
TreeNode.prototype.toString = function () {
    if (this === null) return '[]';
    let values = [], queue = [this];
    while (queue.length > 0) {
        if (queue[0] === null) {
            values.push(null);
        } else {
            values.push(queue[0].val);
            queue.push(queue[0].left);
            queue.push(queue[0].right);
        }
        queue.shift();
    }
    while (values[values.length - 1] === null) {
        values.pop();
    }
    return '[' + values.join(',') + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
TreeNode.create = function (data) {
    if (data.length === 2) return null;
    let values = data.slice(1, -1).split(',').map(item => item === '' ? null : parseInt(item));
    let root = new TreeNode(values[0]);
    values.shift();
    let queue = [root]
    while (values.length > 0) {
        if (values[0] !== null) {
            let left = new TreeNode(values[0]);
            queue[0].left = left;
            queue.push(left);
        } else {
            queue[0].left = null;
        }
        values.shift()
        if (values.length > 0) {
            if (values[0] !== null) {
                let right = new TreeNode(values[0]);
                queue[0].right = right;
                queue.push(right);
            } else {
                queue[0].right = null;
            }
            values.shift();
        }
        queue.shift();
    }
    return root;
};

module.exports = TreeNode;
 