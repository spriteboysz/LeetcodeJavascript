/*
 * Author: Deean
 * Date: 2022-10-05 19:42
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');
let TreeNode = require('../common/TreeNode.js');

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }

    function createBST(nums) {
        if (nums.length === 0) return null;
        let mid = nums.length >> 1;
        let root = new TreeNode(nums[mid]);
        root.left = createBST(nums.slice(0, mid));
        root.right = createBST(nums.slice(mid + 1,))
        return root;
    }

    return createBST(values);
};

console.log(sortedListToBST(ListNode.create("[-10,-3,0,5,9]")).toString());
 