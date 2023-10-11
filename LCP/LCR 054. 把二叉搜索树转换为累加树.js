/*
 * Author: Deean
 * Date: 2023-10-08 21:59
 * FilePath: LCP
 * Description: LCR 054. 把二叉搜索树转换为累加树
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    var dfs = function (root) {
        if (!root) return;
        dfs(root.right);
        acc += root.val;
        root.val = acc;
        dfs(root.left);
    }

    if (!root) return root;
    let acc = 0;
    dfs(root);
    return root;
};

console.log(convertBST(TreeNode.create("[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]")).toString());