/*
 * Author: Deean
 * Date: 2023-10-08 22:03
 * FilePath: LCP
 * Description: LCR 055. 二叉搜索树迭代器
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    var dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    if (!root) return;
    let values = [];
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
    return this.values.length > this.index;
};

var obj = new BSTIterator(TreeNode.create("[7, 3, 15, null, null, 9, 20]"));
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.next());