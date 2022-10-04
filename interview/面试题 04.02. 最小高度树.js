/*
 * Author: Deean
 * Date: 2022-10-04 10:59
 * FilePath: interview
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    let mid = nums.length >> 1;
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]).toString());
 