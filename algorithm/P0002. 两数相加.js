/*
 * Author: Deean
 * Date: 2022-10-05 17:06
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy, carry = 0;
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        cur.next = new ListNode(carry % 10);
        cur = cur.next;
        carry = Math.floor(carry / 10);
    }
    return dummy.next;
};

console.log(addTwoNumbers(ListNode.create("[9,9,9,9,9,9,9]"),
    ListNode.create("[9,9,9,9]")).toString());
 