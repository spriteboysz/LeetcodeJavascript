/*
 * Author: Deean
 * Date: 2023-08-13 11:44
 * FilePath: algorithm
 * Description:1261. 在受污染的二叉树中查找元素
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 */
var FindElements = function (root) {
    let values = new Set();
    var dfs = function (root, val) {
        if (root === null) return;
        root.val = val;
        values.add(val);
        if (root.left) {
            dfs(root.left, val * 2 + 1);
        }
        if (root.right) {
            dfs(root.right, val * 2 + 2);
        }
    }
    dfs(root, 0);
    this.values = values;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.values.has(target);
};

let root = TreeNode.create("[-1,-1,-1,-1,-1]");
obj = new FindElements(root);
console.log(obj.find(1));
console.log(obj.find(3));
console.log(obj.find(5));