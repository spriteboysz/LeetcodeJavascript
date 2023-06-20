/*
 * Author: Deean
 * Date: 2023-06-19 23:11
 * FilePath: interview
 * Description:面试题 02.05. 链表求和
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        if (l1 !== null) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            carry += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(carry % 10);
        cur = cur.next;
        carry = Math.floor(carry / 10);
    }
    return dummy.next;
};
let l1 = ListNode.create("[7,1,6]");
let l2 = ListNode.create("[5,9,2]");
console.log(addTwoNumbers(l1, l2).toString());