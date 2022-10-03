/*
 * Author: Deean
 * Date: 2022-10-03 22:44
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = TreeNode.create("[1,2]"), q = TreeNode.create("[1,null,2]");
console.log(isSameTree(p, q));
 