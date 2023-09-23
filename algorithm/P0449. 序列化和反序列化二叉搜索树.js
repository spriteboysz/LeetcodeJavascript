/*
 * Author: Deean
 * Date: 2023-09-23 12:53
 * FilePath: algorithm
 * Description:449. 序列化和反序列化二叉搜索树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) return "[]";
    var queue = [root];
    var values = [];
    while (queue.length) {
        for (let i = 0, n = queue.length; i < n; i++) {
            var node = queue.shift();
            if (node) {
                values.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                values.push("null");
            }
        }
    }
    while (values[values.length - 1] === "null") {
        values.pop();
    }
    return "[" + values.join(",") + "]";
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === "[]") return null;
    var values = data.substring(1, data.length - 1).split(",");
    var root = new TreeNode(values[0]);
    var queue = [root];
    var i = 1;
    while (i < values.length) {
        var node = queue.shift();
        if (!node) break;
        if (values[i] !== "null") {
            node.left = new TreeNode(values[i]);
            queue.push(node.left);
        }
        i += 1;
        if (!values[i]) break;

        if (values[i] !== "null") {
            node.right = new TreeNode(values[i]);
            queue.push(node.right);
        }
        i += 1;
        if (!values[i]) break;
    }
    return root;
};

console.log(serialize(deserialize("[1,2,3,null,null,4,5]")))
console.log(serialize(deserialize("[1,2,0]")))