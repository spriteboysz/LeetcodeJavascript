/*
 * Author: Deean
 * Date: 2022-10-02 13:50
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    if (!original) return null;
    let {left, right} = original;
    if (original.val === target.val) {
        return cloned;
    } else {
        return getTargetCopy(left, cloned.left, target) || getTargetCopy(right, cloned.right, target);
    }
};

let tree = TreeNode.create("[7, 4, 3, null, null, 6, 19]"), target = new TreeNode(3);
console.log(getTargetCopy(tree, tree, target).toString());
 