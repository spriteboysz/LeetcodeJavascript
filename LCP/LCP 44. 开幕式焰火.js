/*
 * Author: Deean
 * Date: 2022-10-01 21:57
 * FilePath: LCP
 * Description: 
 */

// import TreeNode from '../common/TreeNode.js'
let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
    let values = new Set();

    function dfs(root) {
        if (root === null) return;
        values.add(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);
    console.log(values)
    return values.size;
};

console.log(numColor(TreeNode.create("[1,3,2,1,null,2]")));
 