/*
 * Author: Deean
 * Date: 2022-10-02 21:50
 * FilePath: algorithm
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
        if (!root) return;
        dfs(root.right);
        sum += root.val;
        root.val = sum;
        dfs(root.left);
    }

    dfs(root);
    return root;
};

let root = TreeNode.create("[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]");
console.log(convertBST(root).toString());
 