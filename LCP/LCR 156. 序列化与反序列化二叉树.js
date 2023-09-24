/*
 * Author: Deean
 * Date: 2023-09-23 08:34
 * FilePath: LCP
 * Description:LCR 156. 序列化与反序列化二叉树
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
    var levels = [];
    var queue = [root];
    while (queue.length) {
        for (let i = 0, n = queue.length; i < n; i++) {
            var node = queue.shift();
            if (node) {
                levels.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                levels.push("null");
            }
        }
    }
    while (levels[levels.length - 1] === "null") {
        levels.pop();
    }
    return "[" + levels.join(',') + "]";
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