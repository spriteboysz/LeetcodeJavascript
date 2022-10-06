/*
 * Author: Deean
 * Date: 2022-10-06 21:17
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    if (!root) return;
    let values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);
    this.values = values;
    this.index = 0;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.values[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.index < this.values.length;
};

console.log(
    bSTIterator = new BSTIterator(TreeNode.create("[7,3,15,null,null,9,20]")),
    bSTIterator.next(),    // 返回 3
    bSTIterator.next(),    // 返回 7
    bSTIterator.hasNext(), // 返回 True
    bSTIterator.next(),    // 返回 9
    bSTIterator.hasNext(),// 返回 True
    bSTIterator.next(),    // 返回 15
    bSTIterator.hasNext(), // 返回 True
    bSTIterator.next(),    // 返回 20
    bSTIterator.hasNext(), // 返回 False
);
 