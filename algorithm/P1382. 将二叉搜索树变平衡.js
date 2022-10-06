/*
 * Author: Deean
 * Date: 2022-10-06 21:36
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    const values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);

    function creatBST(nums) {
        if (nums.length === 0) return null;
        let mid = nums.length >> 1;
        let root = new TreeNode(nums[mid]);
        root.left = creatBST(nums.slice(0, mid));
        root.right = creatBST(nums.slice(mid + 1));
        return root;
    }

    return creatBST(values);
};

console.log(balanceBST(TreeNode.create("[1,null,2,null,3,null,4,null,null]")).toString());
 