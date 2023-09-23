/*
 * Author: Deean
 * Date: 2023-09-23 15:38
 * FilePath: algorithm
 * Description:450. 删除二叉搜索树中的节点
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    /**
     *
     * @param root
     * @param key
     * @return void
     */
    var dfs = function (root, key) {
        if (root === null) return;
        dfs(root.left, key);
        if (root.val !== key) {
            values.push(root.val);
        }
        dfs(root.right, key);
    }

    /**
     *
     * @param left
     * @param right
     * @return {TreeNode|null}
     */
    var create = function (left, right) {
        if (left >= right) return null;
        var mid = left + ((right - left) >> 1);
        var root = new TreeNode(values[mid]);
        root.left = create(left, mid);
        root.right = create(mid + 1, right);
        return root;
    }

    const values = [];
    dfs(root, key);
    return create(0, values.length);
};

console.log(deleteNode(new TreeNode.create("[5,3,6,2,4,null,7]"), 3).toString());