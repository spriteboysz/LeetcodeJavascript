/*
 * Author: Deean
 * Date: 2023-08-12 10:08
 * FilePath: algorithm
 * Description:701. 二叉搜索树中的插入操作
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    var dfs = function (root) {
        if (root === null) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }
    
    var create = function (left, right) {
        if (left >= right) return null;
        let mid = left + Math.floor((right - left) / 2);
        let root = new TreeNode(values[mid]);
        root.left = create(left, mid);
        root.right = create(mid + 1, right);
        return root;
    }
    
    let values = [];
    dfs(root);
    values.push(val);
    values.sort((a, b) => a - b);
    return create(0, values.length);
};

let root = TreeNode.create("[4,2,7,1,3]");
console.log(insertIntoBST(root, 5).toString());