/*
 * Author: Deean
 * Date: 2023-10-08 23:10
 * FilePath: LCP
 * Description: LCR 123. 图书整理 I
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function (head) {
    if (!head) return [];
    let nodes = [];
    while (head) {
        nodes.unshift(head.val);
        head = head.next;
    }
    return nodes;
};

console.log(reverseBookList(ListNode.create("[3,6,4,1]")));