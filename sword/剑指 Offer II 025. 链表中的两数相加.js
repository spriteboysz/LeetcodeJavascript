/*
 * Author: Deean
 * Date: 2022-10-05 18:17
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let process = function (head) {
        if (!head) return null;
        let values = [];
        while (head) {
            values.push(head.val);
            head = head.next;
        }
        return values;
    }

    let num1 = process(l1), num2 = process(l2);
    let sum = [], carry = 0;
    while (num1.length > 0 || num2.length > 0 || carry) {
        carry += num1.length > 0 ? num1.pop() : 0;
        carry += num2.length > 0 ? num2.pop() : 0;
        sum.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    sum.reverse();
    let dummy = new ListNode(-1), cur = dummy;
    for (let i = 0; i < sum.length; i++) {
        cur.next = new ListNode(sum[i]);
        cur = cur.next;
    }
    return dummy.next;
};

let l1 = ListNode.create("[2,4,3]"), l2 = ListNode.create("[5,6,4]");
console.log(addTwoNumbers(l1, l2).toString());
 