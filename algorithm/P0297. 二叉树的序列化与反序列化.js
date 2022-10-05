/*
 * Author: Deean
 * Date: 2022-10-05 20:43
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    return JSON.stringify(root);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    return JSON.parse(data);
};

let root = TreeNode.create("[1,2,3,null,null,4,5]")
console.log(deserialize(serialize(root)).toString());
 