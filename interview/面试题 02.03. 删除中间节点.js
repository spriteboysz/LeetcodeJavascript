/*
 * Author: Deean
 * Date: 2022-09-25 23:06
 * FilePath: interview
 * Description: 
 */


//Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// console.log(deleteNode(ListNode(5)));
 