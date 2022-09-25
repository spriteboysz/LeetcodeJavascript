/*
 * Author: Deean
 * Date: 2022-09-25 22:29
 * FilePath: algorithm
 * Description: 
 */


//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function (root) {
    return root.val === root.left.val + root.right.val;
};

console.log(checkTree("[5,3,2]"));
 