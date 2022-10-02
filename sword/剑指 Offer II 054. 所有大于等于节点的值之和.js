/*
 * Author: Deean
 * Date: 2022-10-02 12:11
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let sum = 0;

    function dfs(root) {
        if (root === null) return;
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }

    dfs(root);
    return root;
};

console.log(convertBST(TreeNode.create("[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]")).toString());
 