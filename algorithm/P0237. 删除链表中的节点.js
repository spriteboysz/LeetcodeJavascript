/*
 * Author: Deean
 * Date: 2022-09-25 23:12
 * FilePath: algorithm
 * Description: 
 */


let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

deleteNode(ListNode.create("[1]"));
 