/*
 * Author: Deean
 * Date: 2022-10-05 21:47
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let tilt = 0;

    function dfs(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        tilt += Math.abs(left - right);
        return left + right + root.val;
    }

    dfs(root);
    return tilt;
};

console.log(findTilt(TreeNode.create("[4,2,9,3,5,null,7]")));
 