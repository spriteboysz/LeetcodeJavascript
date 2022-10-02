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
    if (this === undefined) return "undefined tree error";
    if (this === null) return '[]';
    let values = [], queue = [this];
    while (queue.length > 0) {
        if (queue[0] === null) {
            values.push("null");
        } else {
            values.push(queue[0].val);
            queue.push(queue[0].left);
            queue.push(queue[0].right);
        }
        queue.shift();
    }
    while (values[values.length - 1] === "null") {
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
    if (data.length <= 2) return null;
    const values = data.substring(1, data.length - 1).split(",");
    const root = new TreeNode(parseInt(values[0]));

    const queue = [root];
    let i = 1
    while (queue) {
        const node = queue.shift();
        if (!node) break;
        // 第一个是左节点，节点为空，直接跳过
        if (values[i] !== "null") {
            node.left = new TreeNode(parseInt(values[i]));
            queue.push(node.left);
        }
        i += 1;
        if (!values[i]) break;
        // 第二个是右节点，节点为空，直接跳过
        if (values[i] !== "null") {
            node.right = new TreeNode(parseInt(values[i]));
            queue.push(node.right);
        }
        i += 1;
        if (!values[i]) break;
    }
    return root;
};

module.exports = TreeNode;
 