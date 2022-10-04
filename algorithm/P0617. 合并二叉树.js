/*
 * Author: Deean
 * Date: 2022-10-04 10:37
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    let merge = new TreeNode(root1.val + root2.val);
    merge.left = mergeTrees(root1.left, root2.left);
    merge.right = mergeTrees(root1.right, root2.right);
    return merge;
};

let root1 = TreeNode.create("[1,3,2,5]"), root2 = TreeNode.create("[2,1,3,null,4,null,7]");
console.log(mergeTrees(root1, root2).toString());
 