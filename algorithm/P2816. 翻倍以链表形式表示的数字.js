/*
 * Author: Deean
 * Date: 2023-09-21 23:14
 * FilePath: algorithm
 * Description:2816. 翻倍以链表形式表示的数字
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    var nodes = [];
    while (head) {
        nodes.push(head.val);
        head = head.next;
    }
    var carry = 0;
    var dummy = null;
    while (nodes.length > 0 || carry !== 0) {
        carry += (nodes.pop() * 2) || 0;
        dummy = {val: carry % 10, next: dummy};
        carry = Math.floor(carry / 10);
    }
    return dummy;
};

console.log(doubleIt(new ListNode.create("[9,9,8]")));