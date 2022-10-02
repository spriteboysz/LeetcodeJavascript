/*
 * Author: Deean
 * Date: 2022-10-02 21:23
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) {
        return null;
    }
    if (val === root.val) {
        return root;
    }
    return searchBST(val < root.val ? root.left : root.right, val);
};

let root = TreeNode.create("[4,2,7,1,3]"), val = 2;
console.log(searchBST(root, val));
 