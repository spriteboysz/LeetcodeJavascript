/*
 * Author: Deean
 * Date: 2022-10-05 20:31
 * FilePath: algorithm
 * Description: 
 */

const TreeNode = require("../common/TreeNode");
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let common;

    function dfs(root) {
        if (root === null) return false;
        let left = dfs(root.left);
        let right = dfs(root.right);
        if ((left && right) || ((root.val === p.val || root.val === q.val) && (left || right))) {
            common = root;
        }
        return left || right || (root.val === p.val || root.val === q.val);
    }

    dfs(root);
    return common;
};

let root = TreeNode.create("[3,5,1,6,2,0,8,null,null,7,4]");
let p = new TreeNode(5), q = new TreeNode(4);
console.log(lowestCommonAncestor(root, p, q).toString());
 